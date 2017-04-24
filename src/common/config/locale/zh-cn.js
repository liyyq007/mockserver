module.exports = {
    sidebar: {
        projectAdmin: '项目管理',
        projectList: '项目列表',
        addProject: '添加项目',
        apiAdmin: '接口管理',
        addApi: '添加接口',
        systemAdmin: '系统管理',
        globalParamsSetting: '系统参数设置',
    },
    project: {
        index: {
            projectList: '项目列表',
            addProject: '添加项目',
            projectName: '项目名称',
            projectInterfacePrefix: '项目接口前缀',
            proxyPrefix: '代理路径',
            actions: '操作',
            delete: '删除',
            edit: '修改',
            details: '查看接口',
            deleteTips: '删除项目无法恢复且其项目下的接口不会同步删除,你确定删除该项目么?'
        },
        add: {
            editProject: "修改项目",
            addProject: '添加项目',
            projectName: '项目名称',
            projectInterfacePrefix: '项目接口前缀',
            prefixExclude: '不能为以下关键词开头，因为以下关键词已经被系统占用:',
            projectProxyUrl: '项目二次代理Url',
            format: '格式如',
            save: '保存项目'
        },
        controller: {
            title: '项目列表',
            projectIsNotExist: '项目不存在',
            deleteSuccess: '删除成功',
            deleteFail: '删除失败',
            idIsNotExist: 'ID不存在',
            projectNameIsExist: '项目名称已存在',
            dataIsEmpty: '数据为空:点击返回列表',
            editSuccess: '修改成功',
            editFail: '修改失败',
            actionError: '操作失败',
            addSuccess: '添加成功',
        }
    },
    interface: {
        index: {
            searchPlaceHolder: '接口路径或名称',
            search: '搜索',
            closeAllProxies: '关闭全部二次代理',
            openAllProxies: '开启全部二次代理',
            openProxy: '开启二次代理',
            closeProxy: '关闭二次代理',
            addInterface: '添加接口',
            projectName: '项目名称',
            interfaceName: '接口名称',
            interfaceUrl: '接口地址',
            againProxy: '二次代理',
            actions: '操作',
            closed: '已关闭',
            opened: '已开启',
            delete: '删除',
            edit: '修改',
            clone: '复制',
            detail: '查看',
            deleteTips: '删除后无法恢复,你确定删除该接口么?',
            controllerProjectName: '全部接口'
        },
        add: {
            addApi: '添加API',
            editApi: '修改API',
            baseInfoTab: '基本信息',
            requestTab: '请求参数设置',
            responseTab: '响应参数设置',
            proxyTab: '代理设置',
            testTab: '接口测试',
            save: '保存',
            paramValue: '参数值',
            paramSpecification: '参数说明',
            baseInfo: {
                belongTo: '所属项目',
                interfaceName: '接口名称',
                placeholder: '请输入接口名称'
            },
            request: {
                methodTypes: '请求类型',
                interfaceUrl: '接口地址',
                proxyPrefixTips: '此项目下所有接口统一加上前缀',
                getParamsTitle: 'Get参数说明',
                getParamsTip: '说明：接口地址中【?】query参数说明',
                headersParamsTitle: '请求header参数说明',
                headersParamsTips: '说明：发送请求的header信息参数说明',
                requestHeadersTitle: '请求header信息',
                requestHeadersTips: '说明：发送请求的header信息参数值',
                urlMatchMode: 'Url匹配方式',
                exactMatch: '精准匹配',
                exactMatchTips: '精准匹配时,只有路径完全一致时才会匹配',
                incompleteMatch: '只匹配【?】前部分',
                incompleteMatchTips: '只匹配【?】则以下都会匹配:website\/articles\/comment<br>website\/articles/comment?post_id=xx&rrr=vvv...',
                requestBodyTitleDesc: '请求 body 参数说明',
                requestBodyTitleTips: 'post,put等非URL带的参数，如post表单提交的数据字段',
                requestBodyTitle: '请求 body 参数',
            },
            response: {
                responseTitleDesc: '响应数据参数说明',
                responseContentTitle: '响应数据',
                responseStatusCode: '返回状态码',
                responseStatusCodeTips: '返回状态码，默认200',
                delayTime: '延迟返回数据',
                delayTimeTips: '延迟单位为毫秒，默认0<br>注意：请求数据本身会消耗一定时间，所以返回数据的时候会大于设置的延迟时间',
                mockjsTitle: '开启mockjs',
                open: '开启',
                close: '关闭',
                mockjsSite: 'mockjs官网',
                responseHeadersDesc: '响应header参数说明',
                responseHeadersTitle: '响应header参数',
                responseHeadersTips: '添加返回接口的 header信息',
            },
            proxy: {
                globalProxyUrl: '全局二次代理Url路径',
                projectProxyUrl: '项目二次代理Url',
                proxyUrl: '二次代理Url',
                openProxyTipsPrefix: '开启时，接口将从：',
                openProxyTipsPostfix: '返回数据',
                closeProxyTips: '关闭时，将从响应数据设置后返回模拟数据',
                format: '格式如:http://192.168.1.2/',
                proxySwitch: '开启二次代理',
                close: '关闭',
                open: '开启'
            },
            test: {}
        },
        controller: {
            projectName: '全部接口',
            APIList: '接口列表',
            cloneError: '复制的数据不存在',
            deleteSuccess: '删除成功',
            idIsNotExist: 'ID不存在',
            dataIsEmpty: '数据为空:点击返回列表',
            apiIsExist: '修改失败:接口地址已存在：',
            editSuccess: '修改成功',
            editFail: '修改失败',
            returnList: '返回列表',
            details: '查看接口',
            actionError: '操作失败',
            addApiIsExist: '添加失败:接口地址已存在：',
            addSuccess: '添加成功',
            mockIdIsEmpty: 'mock id 为空',
            proxyIsEmpty: 'is_proxy为空',
        }
    },
    system: {
        systemSettings: '系统设置',
        globalProxyUrl: '全局二次代理前缀',
        globalProxyUrlTips: '必须设置。<br>作用1：在二次代理开启时，用于模拟数据与真实数据之间切换。<br>假设：全局二次代理前缀：[http://192.168.1.2]<br>接口地址为：[/api/a/b]，二次代理关闭时，获取模拟数据，二次代理开启时，将获取[http://192.168.1.2/api/a/b]的数据。<br>作用2：假设接口：[/api/dddd],并没有在系统中创建，系统将会请求[http://192.168.1.2/api/dddd],并返回数据',
        format: '格式如:http://192.168.1.2',
        ProxyHeaders: '代理header设置',
        BlackList: '启用黑名单',
        BlackListPlaceHolder: 'header黑名单，一行一个',
        BlackListDesc: '当启用黑名单时，二次代理开启后，当前指定header字段将不会被传递到二次代理的服务上,为空时，默认值为 host 和 accept-encoding两个header字段，<br>原因为：如果请求的url域名与代理的 host 不一致时，二次代理会报错<br>accept-encoding:代理后，容易出现乱码',
        WhiteList: '启用白名单',
        WhiteListPlaceHolder: 'header白名单，一行一个',
        WhiteListDesc: '当启用白名单时，二次代理开启后，将只传递当前指定header字段到二次代理服务上',
        save: '保存全局设置'
    },
    api: {
        multipleInterfaceError: '有多个接口使用了此路径',
        headerFormatError: 'response header信息格式错误',
        proxyIsEmptyError: '没有获取二次代理Url',
        globalProxyIsEmptyError: '没有获取全局二次代理Url',
        getProxyDataError: '获取数据错误,可能是接口不存在,或参数错误,错误信息:'
    }
    //
    // projectAdmin: '项目管理',
    // projectList: '项目列表',
    // projectInterfacePrefix: '项目接口前缀',
    // proxyPrefix: '代理前缀',
    // actions: '操作',
    // delete: '删除',
    // edit: '修改',
    // details: '查看接口',
    // apiAdmin: '接口管理',
    // addApi: '添加接口',
    // systemAdmin: '系统管理',
    // globalParamsSetting: '系统参数设置',
    // baseInfo: '基本信息',
    // request: '请求参数设置',
    // response: '响应参数设置',
    // proxy: '代理设置',
    // tests: '接口测试'
}