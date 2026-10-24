# P1-D｜AI 视频制作生态接入实验

目标：从逐个手写镜头转为复用成熟 Remotion 场景组件与 Agent 制作流程。

## 已核实来源
- Remotion 官方 AI Skills：https://github.com/remotion-dev/skills （包含 remotion-best-practices、remotion-create、remotion-render 等）
- OpenMontage：https://github.com/fivetaku/openmontage （仓库 AGPL-3.0，包含 remotion-composer/src/components 和 SCENE_TYPES.md）
- OpenMontage 现成 StatCard：remotion-composer/src/components/StatCard.tsx，使用 Remotion spring 动画，无额外组件依赖。

## 集成策略
- 先在本实验目录进行一个“中文科普数字卡片”最小样片，复用上游 StatCard 组件源代码，避免整个 OpenMontage 的 Python/视频模型/API 依赖进入主仓库。
- 将上游原始组件和许可证署名放在实验目录，不混入正式组件库；不得把 AGPL 组件标成 MIT。
- 后续对照检查实际渲染质量、依赖数量、中文字体与复用成本。
- Agent Skills 先作为编排规范研究，不声称已安装成运行时 Agent。

## 验收
1. GitHub Actions 可独立渲染 MP4。
2. 复用的现成组件真正参与视频输出。
3. 中文字体正确；实际关键帧验收后再判断画质。
4. 保持 P1 临时实验隔离，P2 正式组件库尚未启动。
