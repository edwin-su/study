# ISNULL
使用指定的替换值替换 NULL。</br>
### **例** : ISNULL ( check_expression , replacement_value )
* 如果check_expression不为NULL，则直接返回该值。也就是 check_expression 这个表达式
* 如果check_expression为NULL，则返回replacement_value的值


# COALESCE
函数返回参数（列名）中第一个非NULL的字段值，注意不是为空'',如果该字段中所有的值都是NULL，coalesce将返回NULL


# DISTINCT
查询结果，去除重复项

# REPLACE
### REPLACE ( ''string_replace1'' , ''string_replace2'' , ''string_replace3'' )<br />
用第三个表达式替换第一个字符串表达式中出现的所有第二个给定字符串表达式。