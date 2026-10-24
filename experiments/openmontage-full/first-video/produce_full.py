#!/usr/bin/env python3
"""Free-asset production: Wikimedia Commons media + Mandarin TTS + music + native OpenMontage."""
import json, pathlib, subprocess, urllib.parse, urllib.request, wave, math, struct
ROOT=pathlib.Path(__file__).resolve().parent
PUBLIC=ROOT.parent/'upstream'/'remotion-composer'/'public'
PUBLIC.mkdir(parents=True,exist_ok=True)
USER_AGENT='MGVideoLearning/0.1 (educational experiment; Wikimedia Commons API)'
queries=['computer motherboard cpu closeup','solid state drive ssd computer','computer ram memory module','computer processor cpu chip']
credits=[]
def commons_image(query,idx):
    api='https://commons.wikimedia.org/w/api.php?'+urllib.parse.urlencode({'action':'query','generator':'search','gsrsearch':query+' filetype:bitmap','gsrnamespace':6,'gsrlimit':12,'prop':'imageinfo','iiprop':'url|extmetadata','iiurlwidth':1920,'format':'json'})
    req=urllib.request.Request(api,headers={'User-Agent':USER_AGENT})
    with urllib.request.urlopen(req,timeout=35) as f: data=json.load(f)
    pages=list(data.get('query',{}).get('pages',{}).values())
    for p in pages:
        info=p.get('imageinfo',[{}])[0]
        url=info.get('thumburl') or info.get('url','')
        if not url.lower().split('?')[0].endswith(('.jpg','.jpeg','.png','.webp')):continue
        try:
            target=PUBLIC/f'learning-asset-{idx}.jpg'
            with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':USER_AGENT}),timeout=50) as f: raw=f.read()
            from PIL import Image
            import io
            im=Image.open(io.BytesIO(raw)).convert('RGB')
            im.thumbnail((1920,1080))
            im.save(target,quality=88)
            meta=info.get('extmetadata',{})
            credits.append({'title':p.get('title'),'url':info.get('descriptionurl'),'license':meta.get('LicenseShortName',{}).get('value'),'author':meta.get('Artist',{}).get('value')})
            return target.name
        except Exception as e:print('asset attempt failed:',str(e)[:120])
    raise RuntimeError('No usable Commons image for '+query)
images=[commons_image(q,i) for i,q in enumerate(queries)]
narration='你点击打开游戏时，电脑内部其实在进行一场接力。首先，硬盘保存游戏文件，就像一座仓库。然后，内存把当前需要的数据放进快速工作区。最后，处理器执行指令，完成计算和调度。三者各司其职，游戏才能顺利运行。'
# Public free Edge speech endpoint; do not conceal dependency or failures.
subprocess.run(['edge-tts','--voice','zh-CN-XiaoxiaoNeural','--rate','+12%','--text',narration,'--write-media',str(PUBLIC/'narration.mp3')],check=True,timeout=120)
# Gentle original instrumental bed generated locally, no external music licensing.
rate=22050; seconds=32
with wave.open(str(PUBLIC/'music.wav'),'wb') as w:
    w.setnchannels(1);w.setsampwidth(2);w.setframerate(rate)
    buf=bytearray()
    for i in range(rate*seconds):
        t=i/rate
        fade=min(1,t/2,(seconds-t)/3)
        sample=0.075*fade*(math.sin(2*math.pi*130.81*t)+0.45*math.sin(2*math.pi*196*t)+0.3*math.sin(2*math.pi*261.63*t))
        buf.extend(struct.pack('<h',int(max(-1,min(1,sample))*32767)))
    w.writeframes(buf)
cuts=[
 {'id':'hook','type':'image','source':images[0],'in_seconds':0,'out_seconds':5,'animation':'ken-burns'},
 {'id':'storage','type':'image','source':images[1],'in_seconds':5,'out_seconds':12,'animation':'pan-right'},
 {'id':'memory','type':'image','source':images[2],'in_seconds':12,'out_seconds':19,'animation':'zoom-in'},
 {'id':'processor','type':'image','source':images[3],'in_seconds':19,'out_seconds':26,'animation':'parallax'},
 {'id':'finish','type':'image','source':images[0],'in_seconds':26,'out_seconds':31,'animation':'zoom-out'}]
overlays=[
 {'type':'section_title','text':'点击游戏之后，电脑在做什么？','in_seconds':0,'out_seconds':5},
 {'type':'section_title','text':'硬盘：保存游戏文件','in_seconds':5,'out_seconds':12},
 {'type':'section_title','text':'内存：临时存放运行数据','in_seconds':12,'out_seconds':19},
 {'type':'section_title','text':'CPU：执行指令与计算','in_seconds':19,'out_seconds':26},
 {'type':'section_title','text':'三者协作，游戏才能运行','in_seconds':26,'out_seconds':31}]
props={'theme':'flat-motion-graphics','cuts':cuts,'overlays':overlays,'captions':[],'audio':{'narration':{'src':'narration.mp3','volume':1},'music':{'src':'music.wav','volume':0.17,'loop':True}}}
(ROOT/'production-props.json').write_text(json.dumps(props,ensure_ascii=False,indent=2))
(ROOT/'asset-credits.json').write_text(json.dumps(credits,ensure_ascii=False,indent=2))
print('Prepared',len(images),'real-world images + Mandarin narration + original music + native OpenMontage composition')
