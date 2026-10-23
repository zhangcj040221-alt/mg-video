# MG Video · V2

代码驱动 MG 科普动画学习与实验项目。

**全新仓库，从最小可运行镜头开始。** 不复制 V1 的业务代码、旧工作流或特殊判断。仓库公开；不要提交密钥或非公开素材。

## 当前阶段：V2-P1 动画能力验证
- A：粒子沿路径运动、汇聚、发散、重组（Remotion 第一版）
- B：拆解与形变（待做）
- C：科学可视化（待做）
- 只有实际渲染视频经过视觉检查后，才算通过验收。

## 目录
- `experiments/p1-a/`：实验 A 的独立 Remotion 工程。
- `.github/workflows/p1-a.yml`：实验 A 独立渲染流程。
- `docs/`：仅保留必要的工程约定。

## 执行
```bash
cd experiments/p1-a
npm ci
npm run render
```

GitHub Actions 可在 Actions 页手动运行 P1 A Render，输出 MP4 作为 artifact。渲染成功不等于视觉验收成功。

长期研发蓝图位于授权 Google Drive「代码视频文件／项目规划」；代码以本仓库为准。
