window.pageClose = ()=>{
       token.hideHUD();
}

 var zoneArray = [{ "id": "bj", "name": "北京", "sort": 1 }, { "id": "sh", "name": "上海", "sort": 2 }, { "id": "gz", "name": "广东", "sort": 3 }, { "id": "wh", "name": "湖北", "sort": 4 }, { "id": "xa", "name": "陕西", "sort": 5 }, { "id": "cd", "name": "四川", "sort": 6 }, { "id": "nj", "name": "江苏", "sort": 7 }, { "id": "hf", "name": "安徽", "sort": 8 }, { "id": "jn", "name": "山东", "sort": 9 }, { "id": "cs", "name": "湖南", "sort": 10 }, { "id": "tj", "name": "天津", "sort": 11 }, { "id": "zz", "name": "河南", "sort": 12 }, { "id": "hz", "name": "浙江", "sort": 13 }, { "id": "cq", "name": "重庆", "sort": 14 }, { "id": "dl", "name": "辽宁", "sort": 15 }, { "id": "fz", "name": "福建", "sort": 16 }, { "id": "nc", "name": "江西", "sort": 17 }, { "id": "cc", "name": "吉林", "sort": 18 }, { "id": "he", "name": "黑龙江", "sort": 19 }, { "id": "sj", "name": "河北", "sort": 20 }, { "id": "ty", "name": "山西", "sort": 21 }, { "id": "km", "name": "云南", "sort": 22 }, { "id": "lz", "name": "甘肃", "sort": 23 }, { "id": "nn", "name": "广西", "sort": 24 }];

 var univercityMap = {
       'wh' : [ { id: 1, name: '华中科技大学', short: '华中大', zone: 'wh', order: 1 },
       { id: 2, name: '武汉大学', short: '武大', zone: 'wh', order: 2 },
       { id: 3, name: '武汉理工大学', short: '理工大', zone: 'wh', order: 3 },
       { id: 4, name: '华中师范大学', short: '华师', zone: 'wh', order: 4 },
       { id: 5, name: '中南财经政法大学', short: '财大', zone: 'wh', order: 5 },
       { id: 6, name: '中国地质大学', short: '地大', zone: 'wh', order: 6 },
       { id: 7, name: '华中农业大学', short: '华农', zone: 'wh', order: 7 },
       { id: 8, name: '武汉科技大学', short: '武科大', zone: 'wh', order: 8 },
       { id: 9, name: '湖北大学', short: '湖大', zone: 'wh', order: 9 },
       { id: 69, name: '中南民族大学', short: '民大', zone: 'wh', order: 10 },
       { id: 152, name: '湖北工业大学', short: '湖工大', zone: 'wh', order: 11 },
       { id: 193, name: '湖北经济学院', short: '湖经', zone: 'wh', order: 16 },
       { id: 194, name: '江汉大学', short: '江大', zone: 'wh', order: 17 },
       { id: 211, name: '武汉纺织大学', short: '纺大', zone: 'wh', order: 12 },
       { id: 212, name: '武汉工程大学', short: '武工大', zone: 'wh', order: 13 },
       { id: 213, name: '三峡大学', short: '三大', zone: 'wh', order: 14 },
       { id: 214, name: '长江大学', short: '长大', zone: 'wh', order: 15 } ],
       'bj' : [ { id: 10, name: '清华大学', short: '清华', zone: 'bj', order: 1 },
       { id: 11, name: '北京大学', short: '北大', zone: 'bj', order: 2 },
       { id: 12, name: '中国人民大学', short: '人大', zone: 'bj', order: 3 },
       { id: 13, name: '北京理工大学', short: '北理工', zone: 'bj', order: 6 },
       { id: 14, name: '北京航空航天大学', short: '北航', zone: 'bj', order: 5 },
       { id: 15, name: '中国矿业大学(北京)', short: '矿大', zone: 'bj', order: 14 },
       { id: 16, name: '中央财经大学', short: '中财', zone: 'bj', order: 11 },
       { id: 17, name: '北京交通大学', short: '北交大', zone: 'bj', order: 9 },
       { id: 18, name: '北京科技大学', short: '北科大', zone: 'bj', order: 7 },
       { id: 19, name: '中国农业大学', short: '农大', zone: 'bj', order: 16 },
       { id: 72, name: '北京邮电大学', short: '北邮', zone: 'bj', order: 8 },
       { id: 73, name: '北京师范大学', short: '北师大', zone: 'bj', order: 10 },
       { id: 74, name: '中国政法大学', short: '中政', zone: 'bj', order: 12 },
       { id: 75, name: '中国传媒大学', short: '广院', zone: 'bj', order: 22 },
       { id: 90, name: '华北电力大学', short: '华电', zone: 'bj', order: 15 },
       { id: 91, name: '中国石油大学(北京)', short: '石大', zone: 'bj', order: 17 },
       { id: 92, name: '北京化工大学', short: '北化', zone: 'bj', order: 18 },
       { id: 93, name: '北京工业大学', short: '北工大', zone: 'bj', order: 19 },
       { id: 96, name: '中国地质大学(北京)', short: '地大', zone: 'bj', order: 20 },
       { id: 129, name: '中央民族大学', short: '民大', zone: 'bj', order: 21 },
       { id: 149, name: '中国科学院大学', short: '国科大', zone: 'bj', order: 4 },
       { id: 161, name: '对外经济贸易大学', short: '外经贸', zone: 'bj', order: 13 },
       { id: 163, name: '北京外国语大学', short: '北外', zone: 'bj', order: 23 },
       { id: 195, name: '北京林业大学', short: '北林', zone: 'bj', order: 25 },
       { id: 196, name: '首都经济贸易大学', short: '首经贸', zone: 'bj', order: 24 } ],
       'nj' : [ { id: 20, name: '南京大学', short: '南大', zone: 'nj', order: 1 },
       { id: 21, name: '东南大学', short: '东大', zone: 'nj', order: 2 },
       { id: 22, name: '南京航空航天大学', short: '南航', zone: 'nj', order: 7 },
       { id: 23, name: '苏州大学', short: '苏大', zone: 'nj', order: 8 },
       { id: 24, name: '江南大学', short: '江大', zone: 'nj', order: 10 },
       { id: 25, name: '中国矿业大学', short: '矿大', zone: 'nj', order: 3 },
       { id: 70, name: '南京理工大学', short: '南理工', zone: 'nj', order: 6 },
       { id: 76, name: '中国药科大学', short: '药大', zone: 'nj', order: 12 },
       { id: 94, name: '南京农业大学', short: '南农', zone: 'nj', order: 4 },
       { id: 97, name: '江苏大学', short: '江苏大', zone: 'nj', order: 14 },
       { id: 104, name: '南京信息工程大学', short: '南信大', zone: 'nj', order: 17 },
       { id: 128, name: '南京工业大学', short: '南工大', zone: 'nj', order: 11 },
       { id: 143, name: '河海大学', short: '河海', zone: 'nj', order: 9 },
       { id: 153, name: '南京师范大学', short: '南师大', zone: 'nj', order: 5 },
       { id: 202, name: '南京林业大学', short: '南林', zone: 'nj', order: 15 },
       { id: 203, name: '南京工程学院', short: '南工程', zone: 'nj', order: 18 },
       { id: 204, name: '南京审计大学', short: '南审', zone: 'nj', order: 19 },
       { id: 205, name: '南京邮电大学', short: '南邮', zone: 'nj', order: 16 },
       { id: 215, name: '扬州大学', short: '扬大', zone: 'nj', order: 13 } ],
       'xa' : [ { id: 26, name: '西北大学', short: '西大', zone: 'xa', order: 3 },
       { id: 27, name: '西安交通大学', short: '交大', zone: 'xa', order: 1 },
       { id: 28, name: '西北工业大学', short: '西工大', zone: 'xa', order: 2 },
       { id: 29, name: '西安电子科技大学', short: '西电', zone: 'xa', order: 6 },
       { id: 30, name: '西北农林科技大学', short: '西农', zone: 'xa', order: 5 },
       { id: 31, name: '陕西师范大学', short: '陕师', zone: 'xa', order: 7 },
       { id: 71, name: '西安建筑科技大学', short: '建大', zone: 'xa', order: 9 },
       { id: 101, name: '西安理工大学', short: '理工大', zone: 'xa', order: 8 },
       { id: 102, name: '西安工程大学', short: '西工程', zone: 'xa', order: 15 },
       { id: 103, name: '西安外国语大学', short: '西外', zone: 'xa', order: 10 },
       { id: 113, name: '西安财经学院', short: '西财', zone: 'xa', order: 16 },
       { id: 142, name: '西北政法大学', short: '西法大', zone: 'xa', order: 13 },
       { id: 162, name: '长安大学', short: '长大', zone: 'xa', order: 4 },
       { id: 200, name: '西安工业大学', short: '西工院', zone: 'xa', order: 14 },
       { id: 201, name: '陕西科技大学', short: '陕科大', zone: 'xa', order: 12 },
       { id: 210, name: '西安科技大学', short: '西科大', zone: 'xa', order: 11 },
       { id: 244, name: '西安邮电大学', short: '西邮', zone: 'xa', order: 17 } ],
       'gz' : [ { id: 32, name: '中山大学', short: '中大', zone: 'gz', order: 1 },
       { id: 33, name: '暨南大学', short: '暨大', zone: 'gz', order: 3 },
       { id: 34, name: '华南理工大学', short: '华工', zone: 'gz', order: 2 },
       { id: 35, name: '广州大学', short: '广大', zone: 'gz', order: 10 },
       { id: 36, name: '广东工业大学', short: '广工', zone: 'gz', order: 11 },
       { id: 37, name: '汕头大学', short: '汕大', zone: 'gz', order: 9 },
       { id: 77, name: '华南农业大学', short: '华农', zone: 'gz', order: 5 },
       { id: 78, name: '广东财经大学', short: '广财', zone: 'gz', order: 13 },
       { id: 79, name: '广东外语外贸大学', short: '广外', zone: 'gz', order: 12 },
       { id: 139, name: '深圳大学', short: '深大', zone: 'gz', order: 7 },
       { id: 146, name: '华南师范大学', short: '华师', zone: 'gz', order: 4 },
       { id: 216, name: '南方医科大学', short: '南医大', zone: 'gz', order: 6 },
       { id: 217, name: '哈工大深圳研究生院', short: '哈工大', zone: 'gz', order: 8 } ],
       'cd' : [ { id: 38, name: '四川大学', short: '川大', zone: 'cd', order: 1 },
       { id: 39, name: '西南交通大学', short: '交大', zone: 'cd', order: 3 },
       { id: 40, name: '西南财经大学', short: '西财', zone: 'cd', order: 4 },
       { id: 41, name: '四川农业大学', short: '川农', zone: 'cd', order: 6 },
       { id: 107, name: '四川师范大学', short: '川师', zone: 'cd', order: 7 },
       { id: 110, name: '西南科技大学', short: '西科大', zone: 'cd', order: 9 },
       { id: 147, name: '电子科技大学', short: '成电', zone: 'cd', order: 2 },
       { id: 197, name: '西华大学', short: '西华', zone: 'cd', order: 11 },
       { id: 198, name: '成都学院', short: '成大', zone: 'cd', order: 12 },
       { id: 199, name: '成都信息工程大学', short: '成信', zone: 'cd', order: 10 },
       { id: 220, name: '成都理工大学', short: '成理工', zone: 'cd', order: 5 },
       { id: 221, name: '成都中医药大学', short: '成中医', zone: 'cd', order: 8 },
       { id: 282, name: '西南民族大学', short: '民大', zone: 'cd', order: 11 },
       { id: 283, name: '西南石油大学', short: '石大', zone: 'cd', order: 7 } ],
       'tj' : [ { id: 42, name: '南开大学', short: '南开', zone: 'tj', order: 1 },
       { id: 43, name: '河北工业大学', short: '河工大', zone: 'tj', order: 3 },
       { id: 44, name: '天津财经大学', short: '天财', zone: 'tj', order: 7 },
       { id: 45, name: '天津工业大学', short: '天工大', zone: 'tj', order: 6 },
       { id: 46, name: '天津科技大学', short: '科大', zone: 'tj', order: 8 },
       { id: 80, name: '天津商业大学', short: '天商', zone: 'tj', order: 9 },
       { id: 140, name: '天津师范大学', short: '天师', zone: 'tj', order: 4 },
       { id: 141, name: '天津大学', short: '天大', zone: 'tj', order: 2 },
       { id: 222, name: '天津医科大学', short: '天医', zone: 'tj', order: 5 },
       { id: 245, name: '中国民航大学', short: '航大', zone: 'tj', order: 10 } ],
       'hf' : [ { id: 47, name: '中国科学技术大学', short: '中科大', zone: 'hf', order: 1 },
       { id: 48, name: '安徽大学', short: '安大', zone: 'hf', order: 3 },
       { id: 49, name: '合肥工业大学', short: '合工大', zone: 'hf', order: 2 },
       { id: 50, name: '安徽理工大学', short: '安理大', zone: 'hf', order: 5 },
       { id: 51, name: '安徽农业大学', short: '安农', zone: 'hf', order: 6 },
       { id: 127, name: '安徽工业大学', short: '安工大', zone: 'hf', order: 8 },
       { id: 145, name: '安徽师范大学', short: '安师大', zone: 'hf', order: 4 },
       { id: 206, name: '安徽建筑大学', short: '安建大', zone: 'hf', order: 9 },
       { id: 219, name: '安徽财经大学', short: '安财大', zone: 'hf', order: 7 } ],
       'cq' : [ { id: 52, name: '重庆大学', short: '重大', zone: 'cq', order: 1 },
       { id: 53, name: '西南大学', short: '西南大', zone: 'cq', order: 2 },
       { id: 54, name: '重庆师范大学', short: '重师', zone: 'cq', order: 6 },
       { id: 81, name: '西南政法大学', short: '西政', zone: 'cq', order: 3 },
       { id: 111, name: '重庆科技学院', short: '重科', zone: 'cq', order: 9 },
       { id: 144, name: '重庆邮电大学', short: '重邮', zone: 'cq', order: 5 },
       { id: 223, name: '重庆交通大学', short: '交大', zone: 'cq', order: 4 },
       { id: 224, name: '重庆工商大学', short: '工商', zone: 'cq', order: 7 },
       { id: 225, name: '重庆理工大学', short: '重理工', zone: 'cq', order: 8 },
       { id: 226, name: '四川外国语大学', short: '川外', zone: 'cq', order: 10 },
       { id: 227, name: '四川美术学院', short: '川美', zone: 'cq', order: 11 } ],
       'dl' : [ { id: 55, name: '大连理工大学', short: '大工', zone: 'dl', order: 1 },
       { id: 56, name: '东北大学', short: '东大', zone: 'dl', order: 2 },
       { id: 57, name: '辽宁大学', short: '辽大', zone: 'dl', order: 3 },
       { id: 58, name: '大连海事大学', short: '海大', zone: 'dl', order: 5 },
       { id: 59, name: '东北财经大学', short: '东财', zone: 'dl', order: 4 },
       { id: 60, name: '大连大学', short: '连大', zone: 'dl', order: 16 },
       { id: 61, name: '大连交通大学', short: '交大', zone: 'dl', order: 12 },
       { id: 62, name: '辽宁工程技术大学', short: '辽工大', zone: 'dl', order: 6 },
       { id: 186, name: '沈阳理工大学', short: '沈理工', zone: 'dl', order: 14 },
       { id: 187, name: '沈阳航空航天大学', short: '沈航', zone: 'dl', order: 11 },
       { id: 188, name: '沈阳工业大学', short: '沈工大', zone: 'dl', order: 8 },
       { id: 189, name: '沈阳化工大学', short: '化大', zone: 'dl', order: 15 },
       { id: 234, name: '沈阳农业大学', short: '沈农大', zone: 'dl', order: 7 },
       { id: 235, name: '辽宁师范大学', short: '辽师', zone: 'dl', order: 9 },
       { id: 236, name: '沈阳建筑大学', short: '沈建大', zone: 'dl', order: 10 },
       { id: 237, name: '大连工业大学', short: '工大', zone: 'dl', order: 13 } ],
       'jn' : [ { id: 63, name: '山东大学', short: '山大', zone: 'jn', order: 1 },
       { id: 64, name: '山东财经大学', short: '财大', zone: 'jn', order: 12 },
       { id: 65, name: '中国海洋大学', short: '海大', zone: 'jn', order: 2 },
       { id: 66, name: '山东师范大学', short: '山师', zone: 'jn', order: 4 },
       { id: 67, name: '山东农业大学', short: '山农', zone: 'jn', order: 5 },
       { id: 68, name: '青岛大学', short: '青大', zone: 'jn', order: 7 },
       { id: 150, name: '山东科技大学', short: '山科大', zone: 'jn', order: 6 },
       { id: 151, name: '中国石油大学', short: '石大', zone: 'jn', order: 3 },
       { id: 207, name: '山东建筑大学', short: '山建工', zone: 'jn', order: 13 },
       { id: 230, name: '青岛科技大学', short: '青科', zone: 'jn', order: 8 },
       { id: 231,
         name: '哈尔滨工业大学(威海)',
         short: '哈工大',
         zone: 'jn',
         order: 9 },
       { id: 232, name: '济南大学', short: '济大', zone: 'jn', order: 10 },
       { id: 233, name: '青岛理工大学', short: '青理', zone: 'jn', order: 11 } ],
       'cs' : [ { id: 82, name: '中南大学', short: '中南', zone: 'cs', order: 1 },
       { id: 83, name: '湖南大学', short: '湖大', zone: 'cs', order: 2 },
       { id: 84, name: '湘潭大学', short: '湘大', zone: 'cs', order: 4 },
       { id: 85, name: '湖南农业大学', short: '农大', zone: 'cs', order: 5 },
       { id: 86, name: '中南林业科技大学', short: '林科大', zone: 'cs', order: 8 },
       { id: 87, name: '南华大学', short: '南华', zone: 'cs', order: 7 },
       { id: 88, name: '湖南科技大学', short: '湖科', zone: 'cs', order: 9 },
       { id: 89, name: '湖南商学院', short: '商学院', zone: 'cs', order: 11 },
       { id: 148, name: '长沙理工大学', short: '长理', zone: 'cs', order: 6 },
       { id: 164, name: '湖南师范大学', short: '师大', zone: 'cs', order: 3 },
       { id: 209, name: '长沙学院', short: '长大', zone: 'cs', order: 12 },
       { id: 218, name: '湖南工业大学', short: '湖工大', zone: 'cs', order: 10 } ],
       'hz' : [ { id: 95, name: '浙江大学', short: '浙大', zone: 'hz', order: 1 },
       { id: 98, name: '浙江工业大学', short: '浙工大', zone: 'hz', order: 2 },
       { id: 99, name: '浙江工商大学', short: '浙商大', zone: 'hz', order: 8 },
       { id: 100, name: '杭州电子科技大学', short: '杭电', zone: 'hz', order: 4 },
       { id: 109, name: '中国计量学院', short: '量院', zone: 'hz', order: 9 },
       { id: 114, name: '浙江财经大学', short: '浙财大', zone: 'hz', order: 12 },
       { id: 115, name: '浙江理工大学', short: '浙理工', zone: 'hz', order: 6 },
       { id: 116, name: '杭州师范大学', short: '杭师大', zone: 'hz', order: 7 },
       { id: 117, name: '浙江农林大学', short: '农林大', zone: 'hz', order: 10 },
       { id: 118, name: '浙江师范大学', short: '浙师大', zone: 'hz', order: 3 },
       { id: 228, name: '宁波大学', short: '宁大', zone: 'hz', order: 5 },
       { id: 229, name: '温州大学', short: '温大', zone: 'hz', order: 11 } ],
       'sh' : [ { id: 105, name: '上海大学', short: '上大', zone: 'sh', order: 8 },
       { id: 130, name: '上海理工大学', short: '上理', zone: 'sh', order: 9 },
       { id: 131, name: '上海财经大学', short: '上财', zone: 'sh', order: 6 },
       { id: 132, name: '上海交通大学', short: '上交', zone: 'sh', order: 1 },
       { id: 133, name: '复旦大学', short: '复旦', zone: 'sh', order: 2 },
       { id: 134, name: '同济大学', short: '同济', zone: 'sh', order: 3 },
       { id: 135, name: '华东师范大学', short: '华师', zone: 'sh', order: 4 },
       { id: 136, name: '华东理工大学', short: '华理', zone: 'sh', order: 5 },
       { id: 137, name: '上海外国语大学', short: '上外', zone: 'sh', order: 11 },
       { id: 138, name: '东华大学', short: '东华', zone: 'sh', order: 7 },
       { id: 208, name: '上海海事大学', short: '海大', zone: 'sh', order: 12 },
       { id: 238, name: '上海师范大学', short: '上师大', zone: 'sh', order: 10 } ],
       'zz' : [ { id: 106, name: '河南科技大学', short: '河科大', zone: 'zz', order: 7 },
       { id: 108, name: '河南大学', short: '河大', zone: 'zz', order: 2 },
       { id: 112, name: '河南工业大学', short: '河工大', zone: 'zz', order: 6 },
       { id: 120, name: '郑州大学', short: '郑大', zone: 'zz', order: 1 },
       { id: 154, name: '郑州轻工业学院', short: '郑轻', zone: 'zz', order: 10 },
       { id: 155, name: '河南财经政法大学', short: '财大', zone: 'zz', order: 9 },
       { id: 156, name: '中原工学院', short: '中工', zone: 'zz', order: 11 },
       { id: 157, name: '河南师范大学', short: '河师大', zone: 'zz', order: 5 },
       { id: 158, name: '华北水利水电大学', short: '华水', zone: 'zz', order: 8 },
       { id: 159, name: '河南理工大学', short: '河理工', zone: 'zz', order: 4 },
       { id: 160, name: '河南农业大学', short: '河农大', zone: 'zz', order: 3 } ],
       'fz' : [ { id: 119, name: '厦门大学', short: '厦大', zone: 'fz', order: 1 },
       { id: 121, name: '仰恩大学', short: '仰恩', zone: 'fz', order: 7 },
       { id: 122, name: '福建师范大学', short: '福师大', zone: 'fz', order: 3 },
       { id: 123, name: '华侨大学', short: '华大', zone: 'fz', order: 5 },
       { id: 124, name: '集美大学', short: '集大', zone: 'fz', order: 6 },
       { id: 125, name: '福建农林大学', short: '农林大', zone: 'fz', order: 4 },
       { id: 126, name: '福州大学', short: '福大', zone: 'fz', order: 2 } ],
       'nc' : [ { id: 165, name: '南昌大学', short: '昌大', zone: 'nc', order: 1 },
       { id: 166, name: '江西财经大学', short: '江财', zone: 'nc', order: 2 },
       { id: 167, name: '江西师范大学', short: '师大', zone: 'nc', order: 3 },
       { id: 168, name: '江西农业大学', short: '江农', zone: 'nc', order: 6 },
       { id: 169, name: '华东交通大学', short: '华交', zone: 'nc', order: 8 },
       { id: 170, name: '东华理工大学', short: '东理工', zone: 'nc', order: 7 },
       { id: 171, name: '南昌航空大学', short: '昌航', zone: 'nc', order: 4 },
       { id: 242, name: '江西理工大学', short: '江理', zone: 'nc', order: 5 },
       { id: 243, name: '江西科技师范大学', short: '科大', zone: 'nc', order: 9 } ],
       'cc' : [ { id: 172, name: '吉林大学', short: '吉大', zone: 'cc', order: 1 },
       { id: 173, name: '东北师范大学', short: '东师', zone: 'cc', order: 2 },
       { id: 174, name: '延边大学', short: '延大', zone: 'cc', order: 3 },
       { id: 175, name: '吉林财经大学', short: '吉财', zone: 'cc', order: 10 },
       { id: 176, name: '吉林农业大学', short: '吉农', zone: 'cc', order: 7 },
       { id: 177, name: '长春理工大学', short: '长理', zone: 'cc', order: 4 },
       { id: 190, name: '长春大学', short: '长大', zone: 'cc', order: 9 },
       { id: 239, name: '东北电力大学', short: '东电', zone: 'cc', order: 5 },
       { id: 240, name: '长春工业大学', short: '工大', zone: 'cc', order: 6 },
       { id: 241, name: '吉林师范大学', short: '吉师', zone: 'cc', order: 8 } ],
       'he' : [ { id: 178, name: '哈尔滨工业大学', short: '哈工大', zone: 'he', order: 1 },
       { id: 179, name: '哈尔滨工程大学', short: '哈工程', zone: 'he', order: 2 },
       { id: 180, name: '东北林业大学', short: '东林', zone: 'he', order: 3 },
       { id: 181, name: '东北农业大学', short: '东农', zone: 'he', order: 5 },
       { id: 182, name: '哈尔滨理工大学', short: '哈理工', zone: 'he', order: 6 },
       { id: 183, name: '黑龙江大学', short: '黑大', zone: 'he', order: 4 },
       { id: 184, name: '哈尔滨师范大学', short: '哈师范', zone: 'he', order: 7 },
       { id: 185, name: '东北石油大学', short: '东油', zone: 'he', order: 8 },
       { id: 191, name: '哈尔滨商业大学', short: '哈商大', zone: 'he', order: 9 },
       { id: 192, name: '黑龙江科技大学', short: '黑科大', zone: 'he', order: 10 } ],
       'ty' : [ { id: 246, name: '山西大学', short: '山大', zone: 'ty', order: 1 },
       { id: 247, name: '太原理工大学', short: '太理', zone: 'ty', order: 2 },
       { id: 248, name: '中北大学', short: '中北', zone: 'ty', order: 3 },
       { id: 249, name: '山西财经大学', short: '山财', zone: 'ty', order: 4 },
       { id: 250, name: '山西师范大学', short: '山师大', zone: 'ty', order: 5 },
       { id: 251, name: '山西农业大学', short: '山农大', zone: 'ty', order: 6 },
       { id: 252, name: '太原科技大学', short: '太科大', zone: 'ty', order: 7 } ],
       'sj' : [ { id: 253, name: '燕山大学', short: '燕大', zone: 'sj', order: 1 },
       { id: 254, name: '河北大学', short: '河大', zone: 'sj', order: 2 },
       { id: 255, name: '河北师范大学', short: '河师大', zone: 'sj', order: 3 },
       { id: 256, name: '河北农业大学', short: '河农大', zone: 'sj', order: 4 },
       { id: 257, name: '河北科技大学', short: '河科大', zone: 'sj', order: 5 },
       { id: 258, name: '石家庄铁道大学', short: '铁大', zone: 'sj', order: 6 },
       { id: 259, name: '河北经贸大学', short: '经贸大', zone: 'sj', order: 7 },
       { id: 260, name: '华北理工大学', short: '华理工', zone: 'sj', order: 8 },
       { id: 261, name: '河北工程大学', short: '河工程', zone: 'sj', order: 9 },
       { id: 262, name: '河北地质大学', short: '冀地大', zone: 'sj', order: 10 } ],
       'km' : [ { id: 263, name: '云南大学', short: '云大', zone: 'km', order: 1 },
       { id: 264, name: '昆明理工大学', short: '昆工', zone: 'km', order: 2 },
       { id: 265, name: '云南师范大学', short: '云师大', zone: 'km', order: 3 },
       { id: 266, name: '云南民族大学', short: '云民大', zone: 'km', order: 4 },
       { id: 267, name: '云南农业大学', short: '云农大', zone: 'km', order: 5 },
       { id: 268, name: '云南财经大学', short: '云财', zone: 'km', order: 6 },
       { id: 269, name: '西南林业大学', short: '西林', zone: 'km', order: 7 } ],
       'lz' : [ { id: 270, name: '兰州大学', short: '兰大', zone: 'lz', order: 1 },
       { id: 271, name: '西北师范大学', short: '西师', zone: 'lz', order: 2 },
       { id: 272, name: '兰州交通大学', short: '兰交大', zone: 'lz', order: 3 },
       { id: 273, name: '兰州理工大学', short: '兰理工', zone: 'lz', order: 4 },
       { id: 274, name: '甘肃农业大学', short: '甘农大', zone: 'lz', order: 5 },
       { id: 275, name: '西北民族大学', short: '西民大', zone: 'lz', order: 6 },
       { id: 276, name: '兰州财经大学', short: '兰财大', zone: 'lz', order: 7 } ],
       'nn' : [ { id: 277, name: '广西大学', short: '西大', zone: 'nn', order: 1 },
       { id: 278, name: '广西师范大学', short: '广师', zone: 'nn', order: 2 },
       { id: 279, name: '桂林理工大学', short: '桂工', zone: 'nn', order: 3 },
       { id: 280, name: '桂林电子科技大学', short: '桂电', zone: 'nn', order: 4 },
       { id: 281, name: '广西民族大学', short: '广民大', zone: 'nn', order: 5 } ],
       '00' : [ { id: 999, name: '官方认证', short: '官方', zone: '00', order: 1 } ] }

var province = ["北京","上海","广东","湖北","陕西","四川","江苏","安徽","山东","湖南","天津","河南","浙江","重庆","辽宁","福建","江西","吉林","黑龙江","河北","山西","云南","甘肃","广西"];
var univercitiesName = [];
var univercities = univercityMap['wh'];
univercitiesName = [];
univercities.forEach((item,index) =>{
       univercitiesName.push(item.name);
});

 var listData = [
     {
         sectionData:
             {
                 info : "list data"
             },
         rowsData:[]
     },
 ]

 var list = document.getElementById("list");
 list.openFooterRefresh();
 list.setOnClick((section,row)=>{
     token.alert("info","row:"+row);
 });

 list.onFooterRefresh(()=>{
     currentPage += 1;
     fetchData(false);
 });

 var zoneButton = document.getElementById("zoneButton");
 var univButton = document.getElementById("univButton");
 var searchBar = document.getElementById("searchBar");

 var zoneValue;
 var school;
 var currentPage = 1;

 var selectedSchool = { id: 3, name: '武汉理工大学', short: '理工大', zone: 'wh', order: 3 };

 //开始加载数据
 fetchData(true);

searchBar.onSearchButtonClick((searchtext)=>{
       fetchData(true);
 });

 zoneButton.setOnClick(()=>{
       searchBar.endEditing();
       var pickProvinceData = {
         deepth : [province.length],
         data : [
             province
         ],
         finish:(component)=>{
             zoneButton.setTitle(province[component[0]]+" ▼");
             univButton.setTitle("请选择 ▼");
             zoneValue = zoneArray[component[0]];
             univercities = univercityMap[zoneValue.id];
             univercitiesName = [];
             univercities.forEach((item,index) =>{
                 univercitiesName.push(item.name);
             });
         }
     }
     token.pickData(pickProvinceData);
 });

 univButton.setOnClick(()=>{
       searchBar.endEditing();
     var pickCityData = {
         deepth : [univercitiesName.length],
         data : [
             univercitiesName
         ],
         finish:(component)=>{
             selectedSchool = univercities[component[0]];
             univButton.setTitle(""+selectedSchool.name+" ▼");
             currentPage = 1;
             fetchData(true);
         }
     }
     token.pickData(pickCityData);
 });

 function fetchData(clear){
       token.showHUDWithStatus("正在加载");
       var url = "https://api.wutnews.net/recruit/haitou/xjh/list?client=wutnews&kind=after&zone=";
       url = url + selectedSchool.zone;
       url = url + '&page='+ currentPage;
       url = url + '&univ='+ selectedSchool.id;
       url = url + '&key=' + searchBar.text;
       var requestData = {
           url : url,
           method : "POST",
           success: (responseObj)=>{
                  console.log(responseObj);
                  token.hideHUD();
                  list.stopFooterRefresh();
                  if (responseObj.errCode == 0) {
                     if (clear) {
                         listData[0].rowsData = [];
                     }
                     listData[0].rowsData = listData[0].rowsData.concat(responseObj.data);
                     list.reloadData(listData);
                     if(clear){
                            list.scrollToTop(1);
                     }
                     console.log('listData',listData);
                  }
           },
           failure:(error)=>{
                  console.log(error);
                  token.hideHUD();
                  list.stopFooterRefresh();
           }
       }
       token.request(requestData);
 }