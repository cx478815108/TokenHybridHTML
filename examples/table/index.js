let listData = [
        {
            sectionData:
                {
                    info : '文档示例',
                    sectionHeaderTitle : "section0标题头部",
                    sectionFooterTitle : "section0标题尾部"
                },
            rowsData:[
                {
                    name : 'exp1',
                },
                {
                    name : 'exp2',
                },
                {
                    name : 'exp3',
                },
                {
                    name : 'exp4',
                },
                {
                    name : 'exp5',
                },
                {
                    name : 'exp6',
                },
                {
                    name : 'exp7',
                }
            ]
        },
        {
            sectionData:
                {
                    info : 'JS API',
                    sectionHeaderTitle : "section1标题头部",
                    sectionFooterTitle : "section1标题尾部"
                },
            rowsData:[
                {
                    name : 'token.alert(a,b)',
                },
            ]
        },
    ];

window.onload = function(){
    let list = document.getElementById("list");
    list.reloadData(listData);
};