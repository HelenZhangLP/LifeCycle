# LifeCycle

RN 组件生命周期
第一阶段 初始化-render-装载完成

初始化开始
getDefaultProps
getInitialState
ComponentWillMount
render
ComponentDidMount （通常在这里发送异步请求）

第二阶段 组件运行阶段
state 状态改变
shouldComponentUpdate 返回 true
componetWillUpdate
render
componetDidMount

外部 props 改变
componentWillReceiveProps 更新 state
...（同 state 变化相应的步骤）

第三阶段 卸载组件
卸载 Unmount
componentWillUnmount
结果