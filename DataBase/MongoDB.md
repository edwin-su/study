# mongodb $in 部分匹配
例：
> db.col_content.find({'nodeID':{$in:['7788']}})

结果：
> { "_id" : ObjectId("525baa67539d1ec00700002a"), "nodeID" : [ "7788" ], "i" : 3 } \
> { "_id" : ObjectId("525baab1539d1ec00700002b"), "nodeID" : [ "123", "7788" ], "i" : 4}

<br>

# mongodb $all 完全匹配
例：
> db.col_content.find({'OUT':{$all:['123','7788']}})

结果：
> { "_id" : ObjectId("525baab1539d1ec00700002b"), "OUT" : [ "123", "7788" ], "i" : 4}

<br>

# mongoose里.save()/update()/findOneAndUpdate()的区别
1. ## save()和update()的区别
* update比find之后save()效率高，因为这样不用读取整个文档。
* Mongoose的update是MongoDB的update，但是Mongoose的save可能是MongoDB的插入或是update。
* 关于save，mongoose会自动diff新文档，只更改更新部分。这有利于原子性。
* update不能触发中间件，validation默认不能，但是可以修改。

2. ## update()和findOneAndUpdate()的区别
* update()返回数据处理条数
* findOneAndUpdate()返回处理后的数据
* 简单来说，你需要获取数据就用findOneAndUpdate()，只需要修改数据而不关注修改后数据那就用update()。
