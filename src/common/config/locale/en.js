module.exports = {
    projectList: 'Project List',
    addProject: 'Add Project',
    projectName: 'Project Name',
    projectInterfacePrefix: 'Interface Prefix',
    proxyPrefix: 'proxy Prefix',
    actions: 'actions',
    delete: 'delete',
    edit: 'edit',
    details: 'details',
    sidebar: {
        projectAdmin: 'Project Admin',
        projectList: 'Project List',
        addProject: 'Add Project',
        apiAdmin: 'API Admin',
        addApi: 'Add API',
        systemAdmin: 'System Admin',
        globalParamsSetting: 'Global Settings',
    },
    project: {
        index: {
            projectList: 'Project List',
            addProject: 'Add Project',
            projectName: 'Project Name',
            projectInterfacePrefix: 'API Prefix',
            proxyPrefix: 'Proxy Path',
            actions: 'actions',
            delete: 'delete',
            edit: 'edit',
            details: 'details',
            deleteTips: 'This action cannot be undone.Are you sure you want to delete this project?'
        },
        add: {
            editProject: "Edit Project",
            addProject: 'Add Project',
            projectName: 'Project Name',
            projectInterfacePrefix: 'API Prefix',
            prefixExclude: 'to exclude the following path，because these path  are occupied',
            projectProxyUrl: 'Project Proxy Url',
            format: 'format',
            save: 'Save Project'
        },
        controller: {
            title: 'Project List',
            projectIsNotExist: 'Project dose not exist',
            deleteSuccess: 'delete successful',
            deleteFail: 'delete failed',
            idIsNotExist: 'ID dose not exist',
            projectNameIsExist: 'project name is already exists',
            dataIsEmpty: 'data is empty:click here to go to list',
            editSuccess: 'update successful',
            editFail: 'update failed',
            actionError: 'operation failed',
            addSuccess: 'add successful',
        }
    },
    interface: {
        index: {
            searchPlaceHolder: 'API path or name',
            search: 'Search',
            closeAllProxies: 'Close All Proxies',
            openAllProxies: 'Open All Proxies',
            openProxy: 'Open Proxy',
            closeProxy: 'Close Proxy',
            addInterface: 'Add API',
            projectName: 'Project Name',
            interfaceName: 'API Name',
            interfaceUrl: 'API Url',
            againProxy: 'Proxy Switch',
            actions: 'actions',
            closed: 'closed',
            opened: 'opened',
            delete: 'delete',
            edit: 'edit',
            clone: 'clone',
            detail: 'details',
            deleteTips: 'This action cannot be undone.Are you sure you want to delete this API?'
        },
        add: {
            addApi: 'Add API',
            editApi: 'Edit API',
            baseInfoTab: 'Basic Information',
            requestTab: 'Request Settings',
            responseTab: 'Response Settings',
            proxyTab: 'Proxy Settings',
            testTab: 'Test Settings',
            save: 'Save API',
            paramValue: 'Parameter Value',
            paramSpecification: 'Parameter Description',
            baseInfo: {
                belongTo: 'Belong To',
                interfaceName: 'API Name',
                placeholder: 'Enter API Name'
            },
            request: {
                methodTypes: 'Method Types',
                interfaceUrl: 'API Url',
                proxyPrefixTips: 'all Url add prefix in this project',
                getParamsTitle: 'Get Parameters Description',
                getParamsTip: 'Note： The get parameters description after [?] in  API url',
                headersParamsTitle: 'Request Headers Parameters Description',
                headersParamsTips: '',
                requestHeadersTitle: 'Request Headers Parameters',
                requestHeadersTips: '',
                urlMatchMode: 'Url Match Mode',
                exactMatch: 'Exact Match',
                exactMatchTips: 'If completely match the url, the user is allowed to access this data',
                incompleteMatch: 'only match before [?]',
                incompleteMatchTips: 'Note: the following url can be match :website\/articles\/comment<br>website\/articles/comment?post_id=xx&rrr=vvv...',
                requestBodyTitleDesc: 'Request Body Description',
                requestBodyTitleTips: 'parameters descriptions for post,put...，exam:submitted forms post data',
                requestBodyTitle: 'Request Body',
            },
            response: {
                responseTitleDesc: 'Response Data Description',
                responseContentTitle: 'Response Data',
                responseStatusCode: 'Response Status Code',
                responseStatusCodeTips: 'Default:200',
                delayTime: 'Delay Time',
                delayTimeTips: 'unit:milliseconds，default:0',
                mockjsTitle: 'mockjs',
                open: 'open',
                close: 'close',
                mockjsSite: 'mockjs doc',
                responseHeadersDesc: 'Response Headers Description',
                responseHeadersTitle: 'Response Headers',
                responseHeadersTips: '',
            },
            proxy: {
                globalProxyUrl: 'Global Proxy Url',
                projectProxyUrl: 'Project Proxy url',
                proxyUrl: 'Proxy Url',
                openProxyTipsPrefix: 'If proxy is opened,the data from ',
                openProxyTipsPostfix: '',
                closeProxyTips: 'If proxy is closed，the data from mock data',
                format: 'format:http://192.168.1.2/',
                proxySwitch: 'Proxy Switch',
                close: 'close',
                open: 'open'
            },
            test: {}
        },
        controller: {
            projectName: 'All APIs',
            APIList: 'API list',
            cloneError: 'clone data dose not exist',
            deleteSuccess: 'delete successful',
            idIsNotExist: 'ID dose not exist',
            dataIsEmpty: 'data is empty:click here to go to API list',
            apiIsExist: 'update error:API is already exists：',
            editSuccess: 'update successful',
            editFail: 'update failed',
            returnList: 'return list',
            details: 'API details',
            actionError: 'action error',
            addApiIsExist: 'add failed:API is already exists：',
            addSuccess: 'add successful',
            mockIdIsEmpty: 'mock_id is empty',
            proxyIsEmpty: 'is_proxy is empty',
        }
    },
    system: {
        systemSettings: 'Global Settings',
        globalProxyUrl: 'Global Proxy Url',
        globalProxyUrlTips: "It's necessary!!!.<br>What use does it have?<br>One：<br>Suppose：Global Proxy Url is [http://192.168.1.2] and this API(/api/dddd) dose not created in mock-sever,the system will send to [http://192.168.1.2/api/dddd],and return data,if [http://192.168.1.2/api/dddd] dose not exist,return error message<br>Two:if proxy is opened,it's used switch between mock-data and real data。<br>Suppose：Global Proxy Url is [http://192.168.1.2] and API is [/api/a/b]，the API will get data from  mock-data,when proxy is closed，but the API will get data from [http://192.168.1.2/api/a/b],when proxy is opened",
        format: 'format:http://192.168.1.2',
        ProxyHeaders: 'Proxy Headers',
        BlackList: 'Blacklist',
        BlackListPlaceHolder: 'Blacklist，one per row',
        BlackListDesc: "1.These headers will not send to proxy url,when proxy is opened and blacklist is selected.<br>2.If blacklist is empty and selected，it's default:host and accept-encoding，<br>because：API will get error,when host !== proxy url's domain<br>accept-encoding: the chinese characters often garbled",
        WhiteList: 'Whitelist',
        WhiteListPlaceHolder: 'Whitelist，one per row',
        WhiteListDesc: 'These headers will only send to proxy url,when proxy is opened and blacklist is selected.',
        save: 'Save Settings'
    },
    api: {
        multipleInterfaceError: 'API Url is repetitive',
        headerFormatError: 'Response headers format is error',
        proxyIsEmptyError: "Couldn't get proxy url",
        globalProxyIsEmptyError: "Couldn't get global proxy url",
        getProxyDataError: 'Data is error,API dose not exist or parameters are error ,error information:'
    }
}