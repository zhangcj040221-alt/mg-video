# P1-B6｜真实素材驱动动画实验（进行中）

## 目的
B4 的结构示意和 B5 的图标信息图虽然可渲染，但真实物体辨识度不足。B6 改为“模型负责外观，Remotion 负责镜头、标题与节奏”。

## 第一阶段：外部素材筛选（已完成初筛，尚未下载/渲染）
- **优先候选：** Innerscene Work Tower - Desktop PC，GLB，349 KB，网页标注 CC0，尺寸约 20.5×41.7×47.4 cm。来源：https://www.innerscene.com/tools/library/3d-parts/work-tower-desktop-pc-1e7897c7
- **备选：** Innerscene Mini Compute - Mini PC，GLB，177 KB，网页标注 CC0。来源：https://www.innerscene.com/tools/library/3d-parts/mini-compute-mini-pc-b45f65d1
- **技术参考（暂不引入其资源）：** PC Anatomy 是一个 MIT 许可的交互式电脑硬件 3D 教育项目，具有 CPU 等模型和爆炸展示。但仓库整体许可证不自动保证每个第三方模型独立可复用。来源：https://github.com/brickshow/pc-anatomy

## 实验限制
1. 先制作一个对象的 6–10 秒镜头测试：3D 模型展示、缓慢旋转、镜头推进、中文标题。
2. 优先在渲染前把 GLB 下载并固定到本实验目录，不要在每一帧请求远程模型。
3. 下载前确认直接下载地址、授权说明和实际模型质量；禁止把不明来源资产当成 CC0。
4. 保留模型来源和许可证说明；不把第三方模型拷贝到正式组件库。
5. 只使用 mg-video 仓库与授权的“代码视频文件”云端目录，不接触其他个人工作区。

## 当前状态
已完成候选调查，尚未完成模型下载、3D 镜头实现或视频渲染。B5 仍是二维对照组。P2 正式组件库尚未启动。
