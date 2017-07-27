INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM01', '首页', NULL, '/home.do?stcd=301A0756&wrp=RSR&wrpcd=50023330002', '01.png', '1', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM02', '安全监测', NULL, NULL, '02.png', '2', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM0201', '水雨情', 'DSOM02', '/view/ams/env/summary.do?stcd=301A0755', NULL, '1', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM0202', '工情监测', 'DSOM02', '/view/ams/egr/summary.do?wrp=RSR&wrpcd=50023330002', NULL, '2', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM0203', '视频监控', 'DSOM02', '/view/ams/vdi/videoframe.do?wrp=RSR&wrpcd=50023330002', NULL, '3', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM0204', '巡视检查', 'DSOM02', '/dsom/inspection.do?wrp=RSR&wrpcd=50023330002', NULL, '4', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM03', '资料整编', NULL, NULL, '03.png', '3', 'A', 'N');

-- INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM0308', '人工填报', 'DSOM03', '/view/ams/manual.do?wrp=RSR&wrpcd=50023330002', NULL, '0', 'A', 'N');

-- INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM0301', '工程基本资料', 'DSOM03', '/wrp/rsr/register.do', NULL, '1', 'A', 'N');
INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM0301', '工程基本资料', 'DSOM03', '/wrp/rsr/baseInfo.do?rscd=50023330002', NULL, '1', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM0303', '监测项目汇总表', 'DSOM03', '/dsom/mnr/monitorPS.do', NULL, '2', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM0302', '监测仪器设施考证资料', 'DSOM03', '/dsom/cmpl/show.do?rscd=50023330002', NULL, '3', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM0304', '巡视检查资料', 'DSOM03', '/dsom/inspection/record.do?wrp=RSR&wrpcd=50023330002', NULL, '4', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM0305', '监测资料', 'DSOM03', '/view/ams/record.do?wrp=RSR&wrpcd=50023330002', NULL, '5', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM0306', '成果统计', 'DSOM03', '/view/ams/report.do?wrp=RSR&wrpcd=50023330002', NULL, '6', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM04', '安全鉴定', NULL, '/dsom/doc/safe.do?rscd=50023330002', '04.png', '4', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM05', '调度运用', NULL, '/dsom/mnr/live.do?rscd=50023330002', '05.png', '5', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM06', '应急管理', NULL, '/dsom/doc/plan.do?rscd=50023330002', '06.png', '6', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM07', '维修养护', NULL, '/dsom/mt/maintain.do?rscd=50023330002', '07.png', '7', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM08', '管理制度', NULL, '/dsom/mr/manageRegime.do?rscd=50023330002', '08.png', '8', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM09', '大事记', NULL, '/evt/event.do?wrpcd=50023330002', '09.png', '9', 'A', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ICN, ORD, STS, PGFN) VALUES ('DSOM10', '知识库', NULL, '/kb/knowledgeLib.do', '10.png', '10', 'A', 'N');


INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ORD, STS, ICN, PGFN) VALUES ('DSOM11', '系统管理', NULL, NULL, 11, 'A', 'system.png', 'N');

INSERT INTO SWS_SYS_FN (CD, NM, PCD, URL, ORD, STS, ICN, PGFN) VALUES ('DSOM1101', '用户信息', 'DSOM11', '/priv/user/list.do?_clear=true', 1, 'A', NULL, 'N');

