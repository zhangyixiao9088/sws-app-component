package com.ccs.core.datamodel.Dialect;

import com.ccs.common.exception.message.MessageException;

/**
 * Created by Administrator on 2017/7/26.
 */
public class SqlServerDialetDao extends JdbcDaoSupportExtend implements Dialect {

    public SqlServerDialetDao(){
    }

    public long getNextval(String tableName) {
        String sqName = "SQ_" + tableName.toUpperCase();
        String sql = "select count(0) from user_Sequences m where m.sequence_name=\'" + sqName + "\'";
        int cnt = this.getJdbcTemplate().queryForInt(sql);
        String netValSql;
        if(cnt == 0) {
            netValSql = "create sequence " + sqName + "\n" + "minvalue 1\n" + "maxvalue 999999999999999999999999999\n" + "start with 1\n" + "increment by 1\n" + "cache 20";
            this.getJdbcTemplate().execute(netValSql);
        }

        netValSql = "select " + sqName + ".Nextval from dual";
        long value = this.getJdbcTemplate().queryForLong(netValSql);
        return value;
    }

    @Override
    public String getPage(int pageNum, int pageSize, String sql) {
        long currentRow = (long)((pageNum - 1) * pageSize);
        long maxRow = (long)(pageNum * pageSize);
        if (!sql.contains("order")){
            throw new MessageException("请检查SQLServer是否包含order by");
        }else{
            String order  = sql.substring(sql.lastIndexOf("order"));
            String query = "select * from (select a.*, rownum LocationRow from (" + sql + ") a " + "where rownum <=" + maxRow + ") where LocationRow >" + currentRow + " ";
            String query1 = "select *, (row_number() OVER ("+ order+")) _t2 from ("+ sql +") a";
            return query;
        }
    }

    @Override
    public String getRowCount(String sql) {
        return "select count(0) from (" + sql + ") as _tabel";
    }
}
