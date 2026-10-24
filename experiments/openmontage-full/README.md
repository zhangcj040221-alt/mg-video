# OpenMontage 完整接入入口

本目录是独立完整上游接入入口，不复制或改写上游源码。运行时从上游 Git 仓库检出全部文件（包括 `pipeline_defs/`、`skills/`、`tools/`、`remotion-composer/`、`styles/`），避免把上游成百上千文件直接塞进 V2 主工程。

- 上游：https://github.com/fivetaku/openmontage
- 许可证：AGPL-3.0，完整许可证随上游检出
- 自动化工作流：`.github/workflows/openmontage-full.yml`
- 运行方式：GitHub Actions → Run workflow → `install_and_audit`
- 无需 API 密钥即可检查系统工具清单、Python 依赖与 Remotion 组件；实际调用外部生成服务时需要按提供商配置密钥。
- 原生上游文件保留在工作流检出的独立目录 `experiments/openmontage-full/upstream`，不对 V2 原有 B/P1 实验造成影响。
- 后续上游更新只需重跑工作流；如果需要固定版本，可以把工作流里的 `ref: main` 改成审核过的提交哈希。
- 这不是自研视频引擎，也不将上游代码宣称为本仓库原创。
