import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

const cn = {
  "nav": {
    "wallet": "资产",
    "transfer": "转账",
    "consensus": "共识",
    "contracts": "合约",
    "application": "应用",
    "set": "设置",
    "addressList": "账户管理",
    "nodeList": "网络管理",
    "help": "帮助",
  },

  "public": {
    "confirm": "确 定",
    "cancel": "取 消",
    "copySuccess": "已复制到剪切板",
    "operation": "操作",
    "display": "显示",
    "total": "共",
    "hideReward": "隐藏共识奖励",
    "usableBalance": "可用余额",
    "fee": "手续费",
    "next": "下一步",
    "basicData": "基础信息",
    "time": "时间",
    "amount": "金额",
    "height": "高度",
    "type": "类型",
    "status": "状态",
    "nodeID": "节点ID",
    "roundInfo": "轮次信息",
    "rotation": "轮次",
    "number": "编号",
    "alias": "别名",
    "createAddress": "创建地址",
    "packingAddress": "打包地址",
    "rewardAddress": "奖励地址",
    "commission": "佣金比例",
    "deposit": "保证金",
    "credit": "信用值",
    "remarks": "备注",
    "participants": "参与人数",
    "totalStake": "总委托量",
    "method": "方法",
    "results": "执行结果",
    "success": "成功",
    "fail": "失败",
    "tokenTransfer": "代币转账",
    "contractName": "合约名称",
    "cancelCollection": "取消收藏",
    "contractInfo": "合约描述",
    "input": "发送者",
    "output": "接收者",
    "fromAddresss": "发送者",
    "toAddresss": "接受者",
    "balance": "余额",
    "allToke": "所有代币资产",
    "about": "关 于",
    "logInfo": "日志信息",
    "see": "查看",
    "version": "当前版本",
    "version1": "最新版本",
    "checkUpdates": "检查更新",
    "operatingSystem": "操作系统",
    "into": "进入",
    "re-import": "重新导入",
    "item": "条",
    "bookList": "通讯录",
    "choice": "选择",
    "downloadUrl": "下载地址",
    "checkNetwork": "没有可用服务节点，请检查网络!",
    "resetAddress": "重置地址",
    "unavailable": "(已失效)",
    "flow": "流局",

    "err": "验证并广播交易失败:",
    "err0": "验证并广播交易异常:",
    "err1": "input和outputs组装错误:",
    "err2": "获取账户余额失败:",
    "err3": "获取账户余额异常:",
    "err4": "跨链交易失败:",

    "developers": "开发者：",
    "sponsoredAddress": "赞助地址：",

  },

  "status": {
    "statusundefined": "",
    "status0": "确认中",
    "status1": "已确认",
    "": ""
  },

  "error": {
    "err_0001": "失败",
    "err_0002": "未知错误",
    "err_0003": "数据解析错误",
    "err_0004": "线程名称重复",
    "err_0005": "语言类型不能设置为空",
    "err_0006": "流读写错误",
    "err_0007": "数据大小错误",
    "err_0008": "配置错误",
    "err_0009": "签名错误",
    "err_0010": "服务器拒绝访问",
    "err_0011": "数据量太大，建议单个交易的数据大小为 ",
    "err_0012": "参数错误",
    "err_0013": "参数不能为空",
    "err_0014": "数据错误",
    "err_0015": "数据不存在",
    "err_0016": "下载新版本数据错误",
    "err_0017": "转换JSON数据错误",
    "err_0018": "文件操作错误",
    "err_0019": "序列化错误",
    "err_0020": "反序列化错误",
    "err_0021": "接口不存在",
    "err_0022": "请求超时",
    "err_0023": "RPC请求失败",
    "err_2009": "数据表已存在",
    "err_2010": "数据表不存在",
    "err_2011": "创建数据库区域异常",
    "err_2012": "批量保存数据异常",
    "err_2013": "数据保存错误",
    "err_2014": "更新数据异常",
    "err_2015": "查询数据异常",
    "10000": "成功",
    "10001": "失败",
    "10002": "系统错误",
    "10003": "数据解析错误",
    "10004": "线程名称冲突",
    "10005": "未设置语言",
    "10006": "IO错误",
    "10007": "数据长度不正确",
    "10008": "错误的配置",
    "10009": "签名错误",
    "10010": "请求被拒绝",
    "10011": "数据长度过大",
    "10012": "参数错误",
    "10013": "参数不正确，有参数不能为空",
    "10014": "数据错误",
    "10015": "数据未找到",
    "10016": "下载版本文件失败",
    "10017": "解析JSON数据失败",
    "10018": "文件操作失败",
    "10019": "非法的访问",
    "10020": "实例化异常",
    "10035": "已是最新版本",
    "20000": "存储模块启动失败",
    "20001": "存储错误",
    "20002": "Session未初始化",
    "20003": "有非法的空数据",
    "20004": "批量数据错误",
    "20005": "数据错误",
    "20006": "存储数据失败",
    "20007": "更新数据失败",
    "20008": "回滚数据失败",
    "20009": "数据表不存在",
    "20010": "数据表不存在",
    "20011": "建表数量超过限制",
    "20012": "建表失败",
    "20013": "建表路径错误",
    "20014": "删除表失败",
    "20015": "数据库批量操作关闭",
    "20023": "请求被拒绝",
    "30001": "区块头签名不正确",
    "30002": "区块头基本属性不合法",
    "30003": "区块基本属性不合法",
    "30004": "协议过大",
    "30005": "梅克尔根错误",
    "30006": "删除区块头错误",
    "30007": "交易回滚错误",
    "30008": "共识回滚通知错误",
    "30009": "协议存储通知错误",
    "30010": "共识存储通知错误",
    "30011": "交易保存错误",
    "30012": "区块头保存错误",
    "ac_0000": "密码错误",
    "ac_0001": "账户不存在",
    "ac_0002": "账户已加密",
    "ac_0003": "账户已存在",
    "ac_0004": "地址错误",
    "ac_0005": "别名已存在",
    "ac_0006": "别名不存在",
    "ac_0007": "账户已设置别名",
    "ac_0008": "账户未加密",
    "ac_0009": "别名已存在",
    "ac_0010": "包含已加密的账户",
    "ac_0011": "包含未加密的账户",
    "ac_0012": "私钥格式不正确",
    "ac_0013": "删除别名失败",
    "ac_0014": "账户Keystore不存在",
    "ac_0015": "账户Keystore已损坏",
    "ac_0016": "别名格式错误",
    "ac_0017": "密码格式错误",
    "ac_0018": "账户加密失败",
    "ac_0019": "账户已加密并锁定",
    "ac_0020": "备注太长了",
    "ac_0021": "输入太小了",
    "ac_0022": "必须烧毁一个",
    "ac_0023": "符号计数太大",
    "ac_0024": "不是当前链地址",
    "ac_0025": "是多重签名地址",
    "ac_0026": "不是多重签名地址",
    "ac_0027": "资产不存在",
    "ac_0028": "余额不足",
    "ac_0029": "余额不足",
    "ac_0030": "链不存在",
    "ac_0031": "CoinData数据不完整",
    "ac_0032": "交易不存在",
    "ac_0033": "未找到交易coinData",
    "ac_0034": "交易数据验证错误",
    "ac_0035": "交易类型错误",
    "ac_0036": "无效的交易或当前版本不可用",
    "ac_0037": "交易数据太大",
    "ac_0038": "交易转出人信息不存在",
    "ac_0039": "交易转入人信息不存在",
    "ac_0040": "链ID是错误的",
    "ac_0041": "资产ID是错误的",
    "ac_0042": "交易的签名地址不匹配",
    "ac_0043": "已签署交易的地址",
    "ac_0044": "交易有重复的帐户资产",
    "ac_0045": "保存别名错误",
    "ac_0046": "数量太小",
    "ac_0047": "黑洞地址禁止发起交易",
    "ac_0048": "远程数据响应错误",
    "ac_0049": "交易支付金额不足",
    "ac_0050": "只能有一个多重签名地址",
    "ac_0051": "CoinData不能有合约地址",
    "ac_0052": "合约地址无法参与创建多签名帐户",
    "ac_0053": "多重签名地址不能参与多重签名帐户的创建",
    "ac_0054": "合约地址无法设置别名",
    "ac_0055": "多重签名帐户不存在",
    "ac_0056": "创建多重签名帐户失败",
    "bl_0001": "链切换失败",
    "bl_0002": "本地区块高度与网络高度不同",
    "bl_0003": "初始化本地块时发生错误",
    "bl_0004": "保存创世块时发生错误",
    "bl_0005": "更新最新高度错误",
    "bl_0006": "删除区块头错误",
    "bl_0007": "交易回滚错误",
    "bl_0008": "共识回滚错误",
    "bl_0009": "协议保存错误",
    "bl_0010": "共识保存错误",
    "bl_0011": "交易保存错误",
    "bl_0012": "保存区块头错误",
    "bl_0013": "接收超出范围的块",
    "bl_0014": "接收重复的主块",
    "bl_0015": "接收分叉块",
    "bl_0016": "接收无关块",
    "bl_0017": "块验证错误",
    "bl_0018": "块同步期间发生异常",
    "cc_0001": "跨链交易的转入地址和转出地址不应该属于同一条链",
    "cc_0002": "没有跨链交易的转出账户",
    "cc_0003": "跨链交易转出账户不是相同的链账户",
    "cc_0004": "跨链交易接收账户不是同一个链账户",
    "cc_0005": "对不起，您的信用额度很低",
    "cc_0006": "对于具有多签名帐户的跨链交易，只能有一个转出帐户。",
    "cc_0007": "多签名帐户跨链交易转出帐户不是多签名帐户",
    "cc_0008": "多签名帐户无法发布普通的跨链交易",
    "cc_0009": "此帐户不是加密帐户",
    "cc_0010": "跨链交易转出账户必须是本链账户",
    "cc_0011": "信用值不足",
    "cc_0012": "不能省略转出帐户和转入帐户。",
    "cc_0013": "接口调用失败",
    "cc_0014": "链不存在",
    "cc_0015": "支付数据验证错误",
    "cc_0016": "交易验证错误",
    "cc_0017": "交易数据验证错误",
    "cc_0018": "事务提交失败",
    "cc_0019": "事务回滚失败",
    "cc_0020": "不是跨链交易",
    "cc_0021": "该链中未注册的跨链交易",
    "cc_0022": "目标链中未注册的跨链交易",
    "cc_0023": "资产在整个链中注册",
    "cc_0024": "跨链网络不可用",
    "cc_0025": "链未注册",
    "cc_0026": "链未注册验证者信息",
    "cc_0027": "交易签名的拜占庭验证错误",
    "cc_0028": "跨链资产验证错误",
    "cc_0029": "接收地址错误",
    "cm_0001": "余额不够",
    "cm_0002": "参数交易错误",
    "cm_0003": "不是跨链交易",
    "cm_0004": "参数错误",
    "cm_1001": "已存在链ID",
    "cm_1002": "链ID必须大于0",
    "cm_1003": "未找到链",
    "cm_1004": "链地址错误",
    "cm_1005": "链状态不正确",
    "cm_1006": "链资产超过1",
    "cm_1007": "链魔法参数已经存在",
    "cm_1008": "链名已经存在",
    "cm_1009": "链验证列表为空",
    "cm_1010": "拜占庭签名比率错误",
    "cm_1011": "最大签名数量错误",
    "cm_1012": "链地址前缀错误",
    "cm_1013": "链一旦使用，想要改为禁用，您可以使用updatecrosschain cmd进行更新。",
    "cm_1014": "链处于激活状态",
    "cm_1015": " ChainId:1 或 chainId:2 是系统链。",
    "cm_2000": "资产简称不能为空",
    "cm_2001": "资产简称长度必须小于5",
    "cm_2002": "资产简称已存在",
    "cm_2003": "JSON传输失败",
    "cm_2004": "恢复的资产必须超过0.9",
    "cm_2005": "资产ID已存在",
    "cm_2006": "资产名称不能为空",
    "cm_2007": "资产名称长度必须小于20",
    "cm_2008": "存款金额必须为200000",
    "cm_2009": "资产初始化编号必须大于10000",
    "cm_2010": "资产初始化编号必须小于100000000",
    "cm_2011": "资产小数位数必须大于4",
    "cm_2012": "资产小数位数必须小于8",
    "cm_2013": "用于计算的链不是用于注册资产的链",
    "cm_2014": "资产不存在",
    "cm_2015": "资产编号超过初始化数量",
    "cm_2016": "资产地址错误",
    "cm_2017": "交易hash错误",
    "cm_2018": "事务寄存器rpc调用错误",
    "cm_2019": "分类帐余额rpc调用错误",
    "cm_2020": "Asset had already disable",
    "cm_3000": "帐户验证错误",
    "cm_3001": "帐号签名数据错误。",
    "cs_0001": "数据错误",
    "cs_0002": "交易不存在",
    "cs_0003": "节点不存在",
    "cs_0004": "数据不存在",
    "cs_0005": "地址错误",
    "cs_0006": "参数错误的",
    "cs_0007": "打包地址不能与节点地址相同",
    "cs_0008": "打包地址和奖励地址不能相同",
    "cs_0009": "佣金超出范围",
    "cs_0010": "保证金超出范围",
    "cs_0011": "令牌数量错误",
    "cs_0012": "交易数据验证错误",
    "cs_0013": "节点存在",
    "cs_0014": "已使用节点打包地址",
    "cs_0015": "佣金比例太低",
    "cs_0016": "重复交易",
    "cs_0017": "超过可委托的最高金额",
    "cs_0018": "小于最低保证金额",
    "cs_0019": "数据添加失败",
    "cs_0020": "数据回滚失败",
    "cs_0021": "梅克尔根验证错误",
    "cs_0022": "轮次数据验证失败",
    "cs_0023": "信用不足",
    "cs_0024": "链不存在",
    "cs_0025": "红牌和黄牌交易错误",
    "cs_0026": "区块签名错误",
    "cs_0027": "红牌交易验证错误",
    "cs_0028": "共识奖励验证错误",
    "cs_0029": "验证交易列表是否为空",
    "cs_0030": "远程方法调用失败",
    "cs_0031": "帐户验证错误",
    "cs_0032": "交易签名验证错误",
    "cs_0033": "交易资产信息错误",
    "cs_0034": "委托交易已从委托中撤回",
    "cs_0035": "退出共识交易未确认",
    "cs_0036": "尝试分叉",
    "cs_0037": "双花",
    "cs_0038": "获得太多黄牌",
    "cs_0039": "冲突检测错误",
    "cs_0040": "手续费不足",
    "cs_0041": "解锁时间错误",
    "lg_0001": "参数错误",
    "lg_0002": "链初始化异常",
    "lg_1001": "孤儿交易",
    "lg_1002": "双花",
    "lg_1003": "交易已存在",
    "lg_1004": "余额不足",
    "lg_1005": "发送的TX量小于接收量。",
    "lg_1010": "失败",
    "lg_1011": "资产默认设置错误",
    "lg_1012": "资产符号错误",
    "lg_1013": "资产名称错误",
    "lg_1014": "地址错误",
    "lg_1015": "TX签名错误",
    "lg_1016": "TX RPC错误",
    "nw_0001": "网络消息错误",
    "nw_0002": "网络消息发送失败",
    "nw_0003": "网络消息发送异常",
    "nw_0004": "网络消息广播错误",
    "nw_0005": "对等节点断开连接",
    "nw_0006": "对等节点通道异常",
    "pu_0001": "协议更新模块保存块错误",
    "pu_0002": "协议更新模块回滚块错误",
    "sc_0001": "合约执行错误",
    "sc_0002": "合约地址不存在",
    "sc_0003": "创建合约tx错误",
    "sc_0004": "非法合约地址",
    "sc_0005": "非合约交易",
    "sc_0006": "非合约交易的资金不能转移到合约地址",
    "sc_0007": "名称格式不正确",
    "sc_0008": "非NRC20合约",
    "sc_0009": "非查看方法",
    "sc_0010": "非法合约代码",
    "sc_0011": "重复的令牌名称",
    "sc_0012": "符号的格式不正确",
    "sc_0013": "合约已锁定",
    "sc_0014": "小数值的范围为0到18",
    "sc_0015": "totalSupply的值范围为1到2 ^ 256  -  1",
    "sc_0016": "价格的最小值是25",
    "sc_0017": "当余额不为0时无法删除合约",
    "sc_0018": "合约删除者必须是合约创建者",
    "sc_0019": "合约已被删除",
    "sc_0020": "超过合约调用的最大GAS限制",
    "sc_0021": "不执行视图方法",
    "sc_0022": "本合约不接受直接转入资产",
    "sc_0023": "合约方法不存在",
    "sc_0024": "无法锁定转移金额",
    "sc_0025": "转移到合约地址的余额不足",
    "sc_0026": "合约创建者不是交易创建者",
    "sc_0027": "合约调用者不是交易创建者",
    "sc_0028": "合约删除者不是交易创建者",
    "sc_0029": "合约删除者不是合约创建者",
    "sc_0030": "合约余额异常",
    "sc_0031": "接收方不是合约地址。",
    "sc_0032": "令牌余额不足",
    "sc_0033": "不同的模块注册了重复的cmd",
    "sc_0034": "接口不支持非字符串数组返回值",
    "sc_0035": "非法操作，不能传输token，不能发送事件，不能内部转账，不能在内部调用合约，不能生成新交易",
    "sc_0036": "GAS值的范围是1到10,000,000",
    "sc_0037": "代币的链条ID或资产ID错误。",
    "sc_0038": "要发送的合约通证不为空。",
    "sc_0039": "合约别名格式错误。",
    "sc_0100": "余额不足",
    "sc_0101": "交易手续费不正确",
    "sc_0102": "转账金额太小",
    "sc_0103": "交易不存在",
    "sc_0104": "密码错误",
    "sc_0105": "帐户不存在",
    "sc_0106": "地址错误",
    "sc_9999": "合约未知错误",
    "tx_0001": "交易哈希错误",
    "tx_0002": "地址与链不匹配",
    "tx_0003": "地址与链不匹配",
    "tx_0004": "未支付足够的手续费",
    "tx_0005": "资产ID是错误的",
    "tx_0006": "余额不存在",
    "tx_0007": "余额不存在",
    "tx_0008": "转出数据具有重复的帐户资产",
    "tx_0009": "转入数据有重复的帐户资产",
    "tx_0010": "转出数据不是同一个链",
    "tx_0011": "转入数据不是同一个链",
    "tx_0012": "未找到交易资产数据",
    "tx_0013": "交易已存在",
    "tx_0014": "交易不存在",
    "tx_0015": "反序列化事务错误",
    "tx_0016": "反序列化资产数据错误",
    "tx_0017": "交易的签名地址与交易地址不匹配",
    "tx_0018": "块高度更新在其余时间内无法重新打包",
    "tx_0019": "包获取事务超时",
    "tx_0020": "找不到链",
    "tx_0021": "无效的交易或当前版本不可用",
    "tx_0022": "交易数据验证错误",
    "tx_0023": "交易数据太大",
    "tx_0024": "帐户不存在",
    "tx_0025": "交易账本验证失败",
    "tx_0026": "孤儿交易",
    "tx_0027": "重复交易",
    "tx_0028": "未找到远程响应数据",
    "tx_0029": "交易发送者不能有合约地址",
    "tx_0030": "暂时停止处理新交易",
    "tx_0031": "交易广播失败",
    "tx_0032": "发送消息失败",
    "tx_0033": "地址无效",
    "tx_0034": "未达到多重签名帐户交易的最小签名数",
    "tx_0035": "多重签名交易的发件人只有相同的多重签名地址",
    "tx_0036": "不存在多重签名帐户",
    "tx_0037": "交易验证失败",
    "tx_0038": "合约交易验证失败",
    "tx_0039": "交易已确认",

  },

  "tab": {
    "tab0": "资产",
    "tab1": "类型",
    "tab2": "总额",
    "tab3": "锁定",
    "tab4": "可用",
    "tab5": "时间",
    "tab6": "金额",
    "tab7": "解冻时间",
    "tab8": "冻结原因",
    "tab9": "余额",
    "tab10": "状态",
    "tab11": "地址",
    "tab12": "联系人",
    "tab13": "编辑",
    "tab14": "删除",
    "tab15": "添加联系人",
    "tab16": "备注不能为空",
    "tab17": "地址不能为空",
    "tab18": "请输入正确的地址",
    "tab19": "地址二维码",
    "tab20": "重置密码",
    "tab21": "官网",
    "tab22": "浏览器",
    "tab23": "文档",
    "tab24": "完成备份",
    "tab25": "合约资产",
    "tab26": "资产概览",
    "tab27": "收款",
    "tab28": "明细",
    "tab29": "移除成功后，账户信息将被彻底删除，请确认已备份好账户私钥或Keystore",
    "tab30": "前往备份",
    "tab31": "转账",
    "tab32": "安全警告:",
    "tab33": "编辑联系人"
  },

  "type": {
    "undefined": "",
    "0": "全部交易",
    "1": "共识奖励",
    "2": "转账交易",
    "3": "设置别名",
    "4": "创建节点",
    "5": "加入共识",
    "6": "退出共识",
    "7": "黄牌惩罚",
    "8": "红牌惩罚",
    "9": "注销节点",
    "10": "跨链交易",
    "11": "注册跨链",
    "12": "注销跨链",
    "13": "新增跨链资产",
    "14": "注销跨链资产",
    "15": "创建合约",
    "16": "调用合约",
    "17": "删除合约",
    "18": "合约转账",
    "19": "合约返还",
    "20": "合约创建节点",
    "21": "合约参与共识",
    "22": "合约退出共识",
    "23": "合约注销节点",
    "24": "验证人变更",
    "25": "验证人初始化",
    "26": "token跨链转账"
  },

  "budgetType": {
    "undefined": "",
    "0": "收入/支出",
    "1": "收入",
    "2": "支出",
  },

  "frozenType": {
    "undefined": "",
    "1": "高度锁定",
    "2": "时间锁定",
    "3": "共识锁定",
    "4": "创建节点",
    "5": "加入共识",
    "8": "红牌惩罚",
    "9": "注销节点",
    "11": "注册跨链",
    "13": "新增跨链资产",
  },

  "addressType": {
    "undefined": "",
    "1": "普通地址",
    "2": "合约地址",
    "3": "多签地址"
  },

  "transferStatus": {
    "undefined": "",
    "0": "未确认",
    "1": "已确认"
  },

  "nodeType": {
    "undefined": "",
    "0": "综合排序",
    "1": "信用值",
    "2": "佣金",
    "3": "委托量",
    "4": "保证金"
  },

  "assetsType": {
    "undefined": "",
    "0": "所有资产",
    "1": "普通资产",
    "2": "合约资产",
  },

  "history": {
    "0": "所有历史",
    "1": "加入历史",
    "2": "退出历史",
  },

  "nodeStatus": {
    "undefined": "",
    "0": "全部节点",
    "1": "普通节点",
    "2": "开发者节点",
    "3": "大使节点"
  },

  "lockType": {
    "undefined": "",
    "2": "时间锁定",
    "4": "创建节点锁定",
    "5": "加入共识锁定",
    "8": "红牌惩罚锁定",
    "9": "注销节点锁定",
    "11": "注册跨链",
    "13": "新增跨链资产",
  },

  "contractStatus": {
    "undefined": "",
    "-1": "创建失败",
    "0": "未认证",
    "1": "认证中",
    "2": "认证通过",
    "3": "已失效"
  },

  "password": {
    "password0": "密码",
    "password1": "请输入密码",
    "password2": "取 消",
    "password3": "确 定",
    "password4": "记住密码(浏览器关闭会清除)",
  },

  "home": {
    "home0": "主网资产",
    "home1": "跨链资产",
    "home2": "交易记录",
    "home3": "跨链资产",
    "home4": "NRC20资产",
    "home5": "NRC721资产",
    "home6": "发送 ",
    "home7": "至地址",
    "home8": "发送",
    "home9": "Token管理",
    "home10": "请输入Token",
    "home11": "隐藏持有量为0的Token",
    "home12": "名称",
    "home13": "持有量",
    "home14": "合约地址",
    "home15": "NRC1155资产",
    "home16": "数量",
    "home17": "请输入转账数量",
    "home18": "转账数量必须为整数",
    "home19": "最大转账数量为: ",
  },

  "frozenList": {
    "frozenList0": "冻结列表",
  },

  "transfer": {
    "transfer0": "付款地址",
    "transfer1": "收款地址",
    "transfer2": "资产类型",
    "transfer3": "转账金额",
    "transfer4": "备注",
    "transfer5": "该手续费值是根据当前网络预估的，实际消耗可能小于该值，多余部分将会通过共识奖励退回",
    "transfer6": "转账确认",
    "transfer7": "取 消",
    "transfer8": "确认提交",
    "transfer9": "请输入收款地址",
    "transfer10": "请输入正确的收款地址",
    "transfer11": "请输入金额",
    "transfer12": "金额必须为数字并且小数点后最多位数为",
    "transfer13": "金额必须大于0.001",
    "transfer131": "最大转出金额为:",
    "transfer14": "金额不能大于可用余额",
    "transfer15": "提示：您填写的地址是跨链地址这笔交易将是跨链交易，您只能选择基本资产...",
    "transfer16": "付款地址的资产不足，请切换账户",
    "transfer17": "跨链交易本链资产不足，请切换账户",
    "transfer18": "此合约没有_payable方法不能向此合约地址转账",
    "transfer19": "此合约没有方法不能向此合约地址转账",
    "transfer20": "该账户本链主资产不足够支付手续费",
    "transfer21": "资产的NRC-20合约已经被注销，请选择其他资产!",
    "transfer22": "资产验证中...",
    "transfer23": "请填写正确的收款地址或别名",
    "transfer24": "全部",
    "transfer25": "该资产不能转到合约地址",
    "transfer26": "跨链通道需要升级维护",
  },

  "consensus": {
    "consensus0": "我的共识奖励",
    "consensus1": "共识锁定",
    "consensus2": "可用余额",
    "consensus3": "最近一笔共识奖励",
    "consensus4": "所有共识",
    "consensus5": "创建",
    "consensus6": "共识中节点",
    "consensus7": "总节点数",
    "consensus8": "总委托量",
    "consensus9": "所有节点",
    "consensus10": "请选择输入ID\\别名\\地址....",
    "consensus11": "我的节点",
  },

  "newConsensus": {
    "newConsensus0": "创建节点",
    "newConsensus1": "创建节点确认",
    "newConsensus2": "请输入奖励地址",
    "newConsensus21": "请输入正确的奖励地址",
    "newConsensus3": "请输入打包地址",
    "newConsensus31": "请输入正确的打包地址",
    "newConsensus4": "打包地址不能为创建地址",
    "newConsensus5": "请输入保证金",
    "newConsensus6": "保证金必须数字值",
    "newConsensus7": "对不起，余额不足",
    "newConsensus8": "保证金不小于20000并且不大于200000",
    "newConsensus9": "请输入佣金比例",
    "newConsensus10": "佣金比例为10-100之间的整数",
    "newConsensus11": "保证金不小于10并且不大于100",
    "newConsensus12": "创建地址有过红牌惩罚不能再创建节点",
  },

  "consensusList": {
    "consensusList0": "共识明细",
    "consensusList1": "加入时间",
    "consensusList2": "节点ID",
  },

  "consensusInfo": {
    "consensusInfo0": "退出",
    "consensusInfo1": "委托金额",
    "consensusInfo2": "委托金额不能为空",
    "consensusInfo3": "请输入有效的委托金额数值",
    "consensusInfo4": "委托金额不小于2000并且总委托额小于500000",
    "consensusInfo41": "当前最多可委托 ",
    "consensusInfo42": " 到该节点",
    "consensusInfo43": "节点的最低委托量为2000",
    "consensusInfo5": "注销节点",
    "consensusInfo6": "节点信息",
    "consensusInfo7": "总奖励",
    "consensusInfo8": "创建者别名",
    "consensusInfo9": "创建时间",
    "consensusInfo10": "节点惩罚",
    "consensusInfo11": "黄牌",
    "consensusInfo12": "节点创建人需要向该节点的委托人收取一定比例的共识出块奖励，即佣金。举例：若某时某委托人的全部共识奖励为10，佣金比例设置为10%，则创建人收取10*10% 1 佣金，委托人实际得到共识奖励",
  },

  "nodeService": {
    "nodeService0": "节点切换中...",
    "nodeService1": "网络列表",
    "nodeService2": "名称",
    "nodeService3": "服务地址",
    "nodeService4": "延迟",
    "nodeService5": "状态",
    "nodeService6": "操作",
    "nodeService7": "修改",
    "nodeService8": "移除",
    "nodeService9": "添加节点服务地址",
    "nodeService10": "您输入的非官方地址可能无法正常使用，因此造成的损失将由您自己承担",
    "nodeService11": "测试连接",
    "nodeService12": "立即使用",
    "nodeService13": "名称不能为空",
    "nodeService14": "地址不能为空",
    "nodeService15": "请输入正确的连接地址",
    "nodeService151": "服务地址已经存在，请更换服务地址！",
    "nodeService16": "节点不可以连接",
    "nodeService17": "连接失败",
    "nodeService18": "请求超时",
    "nodeService19": "此操作将移除 {apiUrl} 节点服务，是否继续？",
    "nodeService20": "",
    "nodeService21": "提示",
    "nodeService22": "移除成功",
    "official": "官方",
    "nodeService23": "链名",
    "nodeService24": "地址前缀",
    "nodeService25": "浏览器地址",
    "nodeService26": "地址前缀不能为空",
    "nodeService27": "浏览器地址不能为空",
    "nodeService28": "请输入正确的浏览器地址",
    "nodeService29": "无效的服务地址",
    "nodeService30": "网络重复",
  },

  "address": {
    "address0": "账户管理",
    "address1": "账户",
    "address2": "余额",
    "address3": "别名",
    "address4": "备注",
    "address5": "操作",
    "address6": "修改密码",
    "address7": "备份",
    "address8": "移除",
    "address9": "请输入备注",
    "address10": "取 消",
    "address11": "确 定",
    "address12": "对不起，账户余额不足",
    "address13": "密码错误",
    "address": "",

  },

  "newAddress": {
    "newAddress0": "创建钱包",
    "newAddress1": "备份账户",
    "newAddress2": "设置密码",
    "newAddress3": "备份",
    "newAddress4": "请设置密码用以导入账户、转账、参与共识等重要行为验证",
    "newAddress5": "请认真保存钱包密码，钱包不存储密码，也无法帮您找回，请务必牢记",
    "newAddress6": "密码",
    "newAddress7": "确认密码",
    "newAddress8": "我理解我需要保存好我的密码，否则可能造成资产丢失",
    "newAddress9": "用户协议",
    "newAddress10": "下一步",
    "newAddress11": "导入钱包",
    "newAddress12": "您的账户地址",
    "newAddress13": "请保存好你的Keystore或私钥，如若遗失，钱包将无法帮你找回",
    "newAddress131": "请保存好你的私钥，如若遗失，钱包将无法帮你找回",
    "newAddress14": "请勿向他人分享！ 如在恶意网站使用此文件，您的资金可能面临被盗窃的风险",
    "newAddress15": "请制作备份！ 以防您的电脑故障",
    "newAddress16": "Keystore备份",
    "newAddress17": "明文私钥备份",
    "newAddress18": "完 成",
    "newAddress19": "安全警告:私钥未经加密，备份存在风险，请保存到安全的地方，建议使用Keystore进行备份",
    "newAddress20": "",
    "newAddress21": "复制",
    "newAddress22": "请输入密码",
    "newAddress23": "请输入由字母和数字组合的8-20位密码",
    "newAddress24": "请再次输入密码",
    "newAddress25": "两次输入密码不一致",
    "newAddress26": "Keystore保存失败，请重启再试一次 ",
    "newAddress27": "文件保存完成，位置:",
    "newAddress28": "请选择Keystore文件的保存位置",
    "newAddress29": "请选择知晓密码提示",
    "newAddress": "",

  },

  "editPassword": {
    "editPassword0": "修改密码",
    "editPassword1": "旧密码",
    "editPassword2": "新密码",
    "editPassword3": "确认新密码",
    "editPassword4": "提交",
    "editPassword5": "如果你忘记密码可以使用私钥",
    "editPassword6": "请旧输入密码",
    "editPassword7": "请输入由字母和数字组合的8-20位密码",
    "editPassword8": "请输入新密码",
    "editPassword9": "新密码不能和旧密码相同",
    "editPassword10": "请再次输入新密码",
    "editPassword11": "新密码与确认新密码不一样，请重新输入",
    "editPassword12": "密码修改完成",
    "editPassword13": "旧密码错误",
  },

  "importAddress": {
    "importAddress0": "创建账户",
    "importAddress1": "导入钱包",
    "importAddress2": "Keystore 导入",
    "importAddress3": "私钥导入",
    "importAddress4": "将文件拖到此处，或",
    "importAddress41": "点击上传",
    "importAddress42": "您的浏览器不支持FileReader,请使用最新版谷歌浏览器",
    "importAddress5": "请输入你的私钥",
    "importAddress6": "密码",
    "importAddress7": "确认密码",
    "importAddress8": "导入钱包",
    "importAddress9": "私钥不能为空",
    "importAddress91": "私钥格式错误",
    "importAddress10": "请输入密码",
    "importAddress11": "请输入由字母和数字组合的8-20位密码",
    "importAddress12": "请再次输入密码",
    "importAddress13": "两次输入密码不一致",
    "importAddress14": "请选择导入的Keystore文件",
    "importAddress15": "Keystore导入失败，请重启再试一次 ",
    "importAddress16": "请选择正确的Keystore文件",
    "importAddress17": "请选择一个要导入Keystore文件",
    "importAddress18": "将文件拖到此处，或",
    "importAddress19": "点击上传",
  },

  "setAlias": {
    "setAlias0": "设置别名",
    "setAlias1": "别名可作为",
    "setAlias11": "转账的收款人，为了账户安全，别名设置确定后，将无法修改，请谨慎操作",
    "setAlias2": "设置别名需要花费1个",
    "setAlias3": "总花费",
    "setAlias4": "请输入别名",
    "setAlias5": "请输入别名(只允许使用小写字母、数字、下划线（下划线不能在两端）)",
  },

  "contract": {
    "contract1": "我的合约",
    "contract2": "合约地址",
    "contract3": "标签",
    "contract4": "调用",
    "contract5": "查找合约",
    "contract6": "请输入合约地址",
    "contract7": "搜索",
    "contract8": "所有合约",
    "contract9": "合约地址",
    "contract10": "部署合约",
    "contract11": "获取合约列表失败:",
    "contract12": "获取合约列表异常:",
    "contract13": "搜索合约失败:",
    "contract14": "搜索合约异常:",
    "contract15": "请输入正确的合约地址",
    "contract": "",
  },

  "call": {
    "call1": "请选择一个方法",
    "call2": "不能为空",
    "call3": "高级选项",
    "call4": "预估调用合约交易的gas错误",
    "call5": "预估调用合约交易的gas异常",
    "call6": "验证调用合约交易错误",
    "call7": "验证调用合约交易异常",
    "call8": "不上链方法调用失败",
    "call9": "不上链方法调用异常",
    "call10": "gas 太小可能会使合约交易失败",
    "call11": "请选择资产",
  },

  "deploy": {
    "deploy1": "HEX码",
    "deploy2": "Jar包",
    "deploy3": "上传jar包",
    "deploy4": "文件名",
    "deploy5": "测试",
    "deploy6": "部署",
    "deploy7": "请输入hex编码",
    "deploy8": "请输入gas",
    "deploy81": "Gag Limit范围;1~10000000",
    "deploy9": "请输入price",
    "deploy91": "Price必须大于1",
    "deploy10": "获取构造函数错误:",
    "deploy11": "验证创建合约交易错误",
    "deploy12": "验证创建合约交易异常",
    "deploy13": "预估创建合约交易的gas错误",
    "deploy14": "预估创建合约交易的gas异常",
    "deploy15": "组装创建合约交易的txData错误",
    "deploy16": "测试通过",
    "deploy17": "上传jar包错误",
    "deploy18": "上传jar包异常",
    "deploy19": "请输入合约名称",
    "deploy20": "合约名称(只允许使用小写字母、数字、下划线（下划线不能在两端）)",
    "deploy21": "合约名称",
    "deploy22": "请输入value",
    "deploy": "deploy",
  },

  "codeInfo": {
    "codeInfo0": "合约源代码已认证",
    "codeInfo1": "编译器",
    "codeInfo2": "认证时间",
    "codeInfo3": "合约代码",
    "codeInfo4": "合约源代码未认证",
    "codeInfo5": "对不起，源代码认证失败!",
    "codeInfo6": "上传源码进行认证",
    "codeInfo7": "源码上传注意事项",
    "codeInfo8": "1.请将源码压缩为一个zip包再进行上传",
    "codeInfo9": "2.压缩包中的文件目录结构和代码需和部署时保持已一致，否则将导致认证不通过",
    "codeInfo10": "对不起，上传的文件不超过5M",
    "codeInfo11": "请求超时请重试",
    "codeInfo12": "对不起，什么都没查到",
    "codeInfo13": "3.zip包中不可包含非Java文件，否则将导致上传认证失败",
  },

  "contractInfo": {
    "contractInfo1": "注销合约",
    "contractInfo2": "交易次数",
    "contractInfo3": "创建者",
    "contractInfo4": "代币",
    "contractInfo5": "交易类型",
    "contractInfo51": "调用方法",
    "contractInfo6": "合约方法",
    "contractInfo7": "参数",
    "contractInfo8": "返回类型",
    "contractInfo9": "获取合约详情失败:",
    "contractInfo10": "获取合约详情异常:",
    "contractInfo11": "获取合约交易列表失败:",
    "contractInfo12": "获取合约交易列表异常:",
    "contractInfo13": "验证删除合约失败:",
    "contractInfo14": "contractInfo",
  },

  "bottom": {
    "serviceNode": "当前网络",
    "nodeHeight": "主网/当前网络",
    "agreement": "服务协议",
    "policy": "隐私政策",
    "updateWallet": "更新钱包",
    "Tips": "提示信息",
    "Backstage": "后台运行",
    "err0": "钱包无法连接当前的节点服务，与交易相关功能将无法正常使用，请前往节点服务列表切换至可用节点', '节点服务连接失败",
    "err1": "前往节点服务列表",
    "err2": "刷新"
  },

  "TipsType": {
    "undefined": "",
    "1": "检查更新出错",
    "2": "正在检查更新…",
    "3": "检测到新版本，正在下载…",
    "4": "现在使用的就是最新版本，不用更新",
  },

  "tips": {
    "tips0": "交易已发出，等待区块确认",
    "tips00": "广播交易错误:",
    "tips1": "扫码签名广播交易错误:",
    "tips2": "暂不支持扫码合约转账、跨链交易",
    "tips3": "扫码签名组装交易错误",
    "tips4": "扫码签名发送消息到后台错误:",
    "tips5": "二维码显示以后容易被拍照和摄像请确保环境周边的安全",
    "tips6": "确定安全查看",
    "tips7": "不安全",
    "tips8": "二维码备份",
    "tips9": "备份二维码",
    "tips10": "扫描导入",
    "tips11": "登录易",

    "tips12": "收款信息",
    "tips13": "请填写收款金额",
    "tips14": "请选择币种",
    "tips15": "跳过",
    "tips16": "生成二维码",
    "tips17": "扫描签名",
    "tips171": "准备开奖了",
    "tips18": "打开",
    "tips181": "正在准备下一轮，请稍等...",
    "tips19": "扫描登录",
    "tips191": "请选择数字",
    "tips20": "扫描备份",
    "tips201": "此账户余额不足，请充值或重新导入!",
    "tips21": "扫描交易",
    "tips211": "请导入或创建账户",
    "tips22": "该资产不是NRC20合约资产或没有注册跨链交易",
    "tips23": "该资产没有transferCrossChain方法",
    "tips24": "改应用暂不支持测试网络",
    "tips25": "请输入正确的地址!",
    "tips26": "请选择交易的ID",
    "tips": "",
  },

  "guessNum": {
    "guessNum0": "第",
    "guessNum1": "轮猜数字",
    "guessNum2": "用户选择0-9中的一个数字参与，每轮中奖的用户平分",
    "guessNum3": "奖池",
    "guessNum4": "预留",
    "guessNum5": "部分",
    "guessNum6": "奖池（没有中奖奖池累计下一次）",
    "guessNum7": "参与游戏将消耗",
    "guessNum8": "游戏每",
    "guessNum9": "块开奖一次，中间间隔",
    "guessNum10": "块",
    "guessNum11": "此随机数是基于",
    "guessNum12": "NULS随机数",
    "guessNum13": "开发的绝对公平",
    "guessNum14": "请点击数字",
    "guessNum15": "您猜本轮开",
    "guessNum16": "本轮截止高度",
    "guessNum17": "本轮开奖高度",
    "guessNum18": "当前轮次游戏没有参与人次，参与激活本轮游戏",
    "guessNum19": "当前参与",
    "guessNum20": "猜数",
    "guessNum21": "中奖历史",
    "guessNum22": "游戏轮次",
    "guessNum23": "参与地址",
    "guessNum24": "奖金",
    "guessNum25": "开奖数",
    "guessNum26": "参与时间",
    "guessNum27": "参与历史",
    "guessNum28": "开奖历史",
    "guessNum29": "轮",
    "guessNum30": "开奖",
    "guessNum31": "中奖金额",
    "guessNum32": "参与信息",
    "guessNum33": "中奖信息",
    "guessNum34": "开奖时间",
    "guessNum35": "手续费（调用合约费用及打包费）",
    "guessNum": "guessNum",
  },

  "locking": {
    "locking0": "可自定义锁定时间的转账",
    "locking1": "付款地址：",
    "locking2": "资产：",
    "locking3": "收款地址：",
    "locking4": "请再次确认收款地址（请勿填写交易所充值地址，避免造成您的资产丢失或交易所锁定您账户）",
    "locking5": "金额：",
    "locking6": "解锁时间：",
    "locking7": "选择日期时间",
    "locking8": "备注：",
    "locking9": "手续费：",
    "locking10": "下一步",
    "locking11": "转账信息确认",
    "locking12": "收款地址不能为空",
    "locking13": "请输入正确的NULS地址",
    "locking14": "金额不能为空",
    "locking15": "请输入正确的金额（小数点后最多八位）"
  },

  "oneTo": {
    "oneTo0": "oneTo",
    "oneTo1": "可以转多个地址",
    "oneTo2": "小计",
    "oneTo3": "转账信息确认",
    "oneTo4": "错误：格式错误!",
    "oneTo5": "错误：地址类型错误（只支持NULS主网地址）!",
    "oneTo6": "错误：长度不够!",
    "oneTo7": "错误：金额只能为数字并且小数点前后最多八位",
    "oneTo8": "收款地址/金额",
    "oneTo9": "不能为空",
    "oneTo10": "对不起，您余额不足!",
    "oneTo": "oneTo",
  },

  "application": {
    "application0": "应用",
    "application1": "社区开发",
    "application2": "社区治理",
    "application3": "NULS社区治理工具，1NULS=1票",
    "application4": "进入",
    "application5": "SCO平台，用NULS挖新项目Token",
    "application6": "浏览器",
    "application7": "您想要看到NULS网络上的信息，在这里都能找到",
    "application8": "支持NULS网络的移动端钱包（使用Google play的用户可下载）",
    "application9": "支持NULS网络的移动端钱包",
    "application10": "NULS猜数字",
    "application11": "基于NULS随机数开发的猜数游戏",
    "application12": "可锁定NULS交易",
    "application13": "可自定义锁定时间的NULS转账交易",
    "application14": "一对多转账交易",
    "application15": "可以一对多转账交易支持导入",
    "application": "application",
  },
  "ledger": {
    ledger1: '连接硬件钱包',
    ledger2: '选择希望用于NULS Wallet的硬件钱包',
    ledger3: '插入硬件钱包',
    ledger4: '将您的钱包直接连接到电脑。解锁Ledger并打开NULS应用程序',
    ledger5: '连接中...',
    ledger6: '正在加载...',
    ledger7: '选择账户',
    ledger8: '上一页',
    ledger9: '下一页',
    ledger10: '签名',
    ledger11: '请在Ledger设备中确认签名',
  },
  ...zhLocale
};
export default cn
