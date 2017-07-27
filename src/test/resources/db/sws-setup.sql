-- 河流基本信息表
CREATE TABLE WRP_RVR_BSIN (
    RVCD             CHAR(8)          NOT NULL,
    RVNM             VARCHAR(40)      NOT NULL,
    RVAL             VARCHAR(120),
    RVTP             CHAR(1),
    RVGR             CHAR(1),
    DWWT             VARCHAR(40),
    HWPS             VARCHAR(80),
    HWEL             DECIMAL(7,2),
    HWDTPL           CHAR(2),
    ESPS             VARCHAR(80),
    ESEL             DECIMAL(7,2),
    ESDTPL           CHAR(2),
    RVLEN            DECIMAL(9,3),
    AVGG             DECIMAL(6,3),
    CTAR             DECIMAL(12,3),
    AVANRNAM         DECIMAL(10,2),
    HGHSDS           INT,
    LWHSDS           INT,
    CTPRCT           VARCHAR(500),
    CTPP             INT,
    RVOV             VARCHAR(3000),
    DTUPDT           DATETIME         NOT NULL
);
ALTER TABLE WRP_RVR_BSIN ADD CONSTRAINT PK_WRP_RVR_BSIN PRIMARY KEY (RVCD);

-- 水库基本信息表
CREATE TABLE WRP_RSR_BSIN (
    RSCD             CHAR(11)         NOT NULL,
    RSNM             VARCHAR(40)      NOT NULL,
    ALIAS            VARCHAR(40),
    PRST             CHAR(1),
    PRSC             CHAR(1)          NOT NULL,
    PRGR             CHAR(1),
    MNBLGR           CHAR(1),
    MNUN             VARCHAR(50),
    CMUN             VARCHAR(50),
    BLSYS            VARCHAR(50),
    ADDVCD           VARCHAR(12)      NOT NULL,
    VLTW             VARCHAR(40),
    CTCD             CHAR(2),
    RVCD             CHAR(8),
    ESLG             DECIMAL(20,12),
    NRLT             DECIMAL(20,12),
    EQMTPKACLT       VARCHAR(12),
    BSSSIN           VARCHAR(12),
    FREQIN           VARCHAR(12),
    DTPL             VARCHAR(12),
    CPYR             VARCHAR(12),
    ISRG             CHAR(1),
    RSOV             VARCHAR(3000),
    DTUPDT           DATETIME,
    RV               VARCHAR(40)
);
ALTER TABLE WRP_RSR_BSIN ADD CONSTRAINT PK_WRP_RSR_BSIN PRIMARY KEY (RSCD);

-- 水文测站基本信息表
CREATE TABLE WRP_HMS_BSIN (
    STCD             CHAR(8)          NOT NULL,
    STNM             CHAR(40)         NOT NULL,
    STTP             CHAR(1),
    MNUN             CHAR(50),
    CMUN             CHAR(50),
    ADDVCD           VARCHAR(12)      NOT NULL,
    VLTW             VARCHAR(40),
    CTCD             CHAR(2)          NOT NULL,
    RVCD             CHAR(8),
    ESLG             DECIMAL(9,6),
    RNLT             DECIMAL(8,6),
    HSHGFL           INT,
    HSLWFL           INT,
    DTPL             CHAR(2),
    STSTDT           DATE,
    HMSTOV           VARCHAR(3000),
    DTUPDT           DATETIME         NOT NULL
);
ALTER TABLE WRP_HMS_BSIN ADD CONSTRAINT PK_WRP_HMS_BSIN PRIMARY KEY (STCD, DTUPDT);

-- 堤防(段)基本信息表
CREATE TABLE WRP_LEV_BSIN (
    LVCD             CHAR(11)         NOT NULL,
    LVNM             CHAR(40)         NOT NULL,
    PRST             CHAR(1),
    LVGR             CHAR(1),
    LVTP             CHAR(1),
    MNUN             CHAR(50),
    CMUN             CHAR(50),
    BLSTS            CHAR(1),
    CTCD             CHAR(2)          NOT NULL,
    RVCD             CHAR(8),
    BNSD             CHAR(1),
    LVINPS           CHAR(80),
    LVINCH           CHAR(8),
    LVINEL           DECIMAL(6,2),
    LVTRPS           CHAR(80),
    LVTRCH           CHAR(8),
    LVTREL           DECIMAL(6,2),
    LVLEN            DECIMAL(6,2),
    MAXLVHG          DECIMAL(5,2),
    RVSDBNPTCN       CHAR(10),
    LNSDBNPTCN       CHAR(10),
    BSSIN            INT,
    FREQIN           INT,
    DTPL             CHAR(2),
    CPYR             CHAR(4),
    LVOV             VARCHAR(3000),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_LEV_BSIN ADD CONSTRAINT PK_WRP_LEV_BSIN PRIMARY KEY (LVCD, DTUPDT);

-- 海堤基本信息表
CREATE TABLE WRP_CLV_BSIN (
    CSLVCD           CHAR(10)         NOT NULL,
    CSLVNM           VARCHAR(40)      NOT NULL,
    CSLVGR           CHAR(3)          NOT NULL,
    CSLVTP           VARCHAR(10)      NOT NULL,
    MNUN             VARCHAR(50)      NOT NULL,
    SPUN             VARCHAR(50),
    CSLVINPS         VARCHAR(80),
    CSLVINEL         DECIMAL(6,2),
    CSLVTRPS         VARCHAR(80),
    CSLVTREL         DECIMAL(6,2),
    CSLVLEN          DECIMAL(6,2),
    MAXLVHG          DECIMAL(5,2),
    DTPL             CHAR(4),
    CPYR             CHAR(4),
    CSLVOV           VARCHAR(3000),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_CLV_BSIN ADD CONSTRAINT PK_WRP_CLV_BSIN PRIMARY KEY (CSLVCD, DTUPDT);

-- 蓄滞(行)洪区基本信息表
CREATE TABLE WRP_FWD_BSIN (
    SRPACD           CHAR(10)         NOT NULL,
    SRPANM           VARCHAR(40)      NOT NULL,
    SRPATP           VARCHAR(8)       NOT NULL,
    MNUN             VARCHAR(50)      NOT NULL,
    SPUN             VARCHAR(50),
    LC               VARCHAR(80)      NOT NULL,
    ADDVCD           CHAR(6)          NOT NULL,
    CT               VARCHAR(60)      NOT NULL,
    RV               VARCHAR(40),
    SRPAAR           DECIMAL(8,3),
    SRPALVLEN        DECIMAL(6,2),
    DSFLLV           DECIMAL(6,2),
    DSFLVL           DECIMAL(10,2),
    ENNM             VARCHAR(160),
    SRPAPP           DECIMAL(6,2),
    SRPAFXAS         DECIMAL(9,2),
    ACOPFR           VARCHAR(30),
    CPYR             CHAR(4),
    SRPAOV           VARCHAR(500),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_FWD_BSIN ADD CONSTRAINT PK_WRP_FWD_BSIN PRIMARY KEY (SRPACD, DTUPDT);

-- 湖泊基本信息表
CREATE TABLE WRP_LAK_BSIN (
    LKCD             CHAR(7)          NOT NULL,
    LKNM             CHAR(40)         NOT NULL,
    MNUN             CHAR(50),
    CMUN             CHAR(50),
    LC               VARCHAR(300)     NOT NULL,
    HCCL             CHAR(1),
    CTCD             CHAR(2),
    RVCD             CHAR(8),
    HGSTLV           DECIMAL(6,2),
    MAXST            DECIMAL(10,2),
    MAXSTAR          DECIMAL(10,3),
    NRRGSTLV         DECIMAL(6,2),
    MINRGSTLV        DECIMAL(6,2),
    RGSTVL           DECIMAL(10,2),
    DTPL             CHAR(2),
    LKOV             VARCHAR(500),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_LAK_BSIN ADD CONSTRAINT PK_WRP_LAK_BSIN PRIMARY KEY (LKCD, DTUPDT);

-- 圩垸基本信息表
CREATE TABLE WRP_PLD_BSIN (
    PLCD             CHAR(11)         NOT NULL,
    PLNM             VARCHAR(40)      NOT NULL,
    PLTP             CHAR(8),
    MNUN             VARCHAR(50)      NOT NULL,
    SPUN             VARCHAR(50),
    ADDCVD           CHAR(6)          NOT NULL,
    VLTW             CHAR(40)         NOT NULL,
    CTCD             CHAR(2),
    RVCD             CHAR(8),
    PLVL             DECIMAL(8,3),
    PLPP             INT,
    PLFXAS           INT,
    GNGREL           DECIMAL(8,2),
    PLOV             VARCHAR(500),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_PLD_BSIN ADD CONSTRAINT PK_WRP_PLD_BSIN PRIMARY KEY (PLCD, DTUPDT);

-- 机电排灌站基本信息表
CREATE TABLE WRP_IDS_BSIN (
    IDSTCD           CHAR(11)         NOT NULL,
    IDSTNM           VARCHAR(20)      NOT NULL,
    IDSTTP           VARCHAR(14)      NOT NULL,
    MNUN             VARCHAR(50)      NOT NULL,
    SPUN             VARCHAR(50),
    ADDVCD           CHAR(6)          NOT NULL,
    CTCD             CHAR(2)          NOT NULL,
    RVCD             CHAR(8),
    LG               CHAR(7),
    LT               CHAR(6),
    MNUS             VARCHAR(80),
    INPW             DECIMAL(8,1),
    INFLW            DECIMAL(6,1),
    UNQN             DECIMAL(3,0),
    PMTP             VARCHAR(6),
    DRAR             DECIMAL(10,3),
    IRAR             INT,
    CPYR             CHAR(4),
    IDSTOV           VARCHAR(500),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_IDS_BSIN ADD CONSTRAINT PK_WRP_IDS_BSIN PRIMARY KEY (IDSTCD, DTUPDT);

-- 水闸基本信息表
CREATE TABLE WRP_SLU_BSIN (
    SLCD             CHAR(11)         NOT NULL,
    SLNM             VARCHAR(40)      NOT NULL,
    ALIAS            VARCHAR(40),
    SLTP             VARCHAR(6),
    PRST             CHAR(4),
    PRSC             VARCHAR(7),
    PRGR             CHAR(4),
    MNBLGR           CHAR(4),
    MNUN             VARCHAR(50)      NOT NULL,
    SPUN             VARCHAR(50),
    LC               VARCHAR(80),
    ADDVCD           CHAR(6)          NOT NULL,
    CT               VARCHAR(60)      NOT NULL,
    RV               VARCHAR(40),
    RVCD             CHAR(8),
    PRPS             VARCHAR(40),
    LG               CHAR(7),
    LT               CHAR(6),
    EQMTPKACLT       VARCHAR(6),
    BSSSIN           VARCHAR(4),
    FREQIN           VARCHAR(6),
    MAXDS            DECIMAL(8,1),
    DTPL             CHAR(4),
    SLOV             VARCHAR(3000),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_SLU_BSIN ADD CONSTRAINT PK_WRP_SLU_BSIN PRIMARY KEY (SLCD, DTUPDT);

-- 河道断面基本信息表
CREATE TABLE WRP_RCS_BSIN (
    RVCRSCCD         CHAR(11)         NOT NULL,
    RVCRSCNM         VARCHAR(10)      NOT NULL,
    MNUN             VARCHAR(50)      NOT NULL,
    SPUN             VARCHAR(50),
    LC               VARCHAR(80)      NOT NULL,
    CT               VARCHAR(60)      NOT NULL,
    RV               VARCHAR(40),
    LG               DECIMAL(16,12),
    LT               DECIMAL(16,12),
    CRSCWD           DECIMAL(6,2),
    RVCHWD           DECIMAL(6,2),
    MNRVCHWD         DECIMAL(6,2),
    WRWL             DECIMAL(6,2),
    DTPL             CHAR(4),
    RVCRSCOV         VARCHAR(500),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RCS_BSIN ADD CONSTRAINT PK_WRP_RCS_BSIN PRIMARY KEY (RVCRSCCD, DTUPDT);

-- 跨河工程基本信息表
CREATE TABLE WRP_RCP_BSIN (
    RCPRCD           VARCHAR(11)      NOT NULL,
    RCPRNM           CHAR(40)         NOT NULL,
    RCPRTP           VARCHAR(6),
    MNUN             VARCHAR(50)      NOT NULL,
    SPUN             VARCHAR(50),
    ADDVCD           CHAR(6)          NOT NULL,
    VLTW             CHAR(40),
    CTCD             CHAR(2)          NOT NULL,
    RVCD             CHAR(8),
    LG               CHAR(7),
    LT               CHAR(6),
    LFBNCH           CHAR(10),
    RGBNCH           CHAR(10),
    RCPRBTEL         DECIMAL(6,2),
    RDFLRT           DECIMAL(7,2),
    DTPL             CHAR(4),
    CPYR             CHAR(4),
    RCPOV            VARCHAR(500),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RCP_BSIN ADD CONSTRAINT PK_WRP_RCP_BSIN PRIMARY KEY (RCPRCD, DTUPDT);

-- 治河工程基本信息表
CREATE TABLE WRP_RTP_BSIN (
    RTPCD            CHAR(11)         NOT NULL,
    RTPNM            VARCHAR(40)      NOT NULL,
    RTPTP            VARCHAR(20),
    MNUN             VARCHAR(50)      NOT NULL,
    SPUN             VARCHAR(50),
    LC               VARCHAR(80)      NOT NULL,
    ADDVCD           CHAR(6)          NOT NULL,
    CT               VARCHAR(60)      NOT NULL,
    RV               VARCHAR(40),
    LG               CHAR(7),
    LT               CHAR(6),
    INCH             CHAR(10),
    TRCH             CHAR(10),
    IMSTQN           INT,
    WRLEN            INT,
    CVLEN            INT,
    CPYR             CHAR(4),
    RTPOV            VARCHAR(500),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RTP_BSIN ADD CONSTRAINT PK_WRP_RTP_BSIN PRIMARY KEY (RTPCD, DTUPDT);

-- 穿堤建筑物基本信息表
CREATE TABLE WRP_LCS_BSIN (
    LCSCD            CHAR(11)         NOT NULL,
    LCSNM            VARCHAR(40)      NOT NULL,
    LCSTP            VARCHAR(6),
    MNUN             VARCHAR(50)      NOT NULL,
    SPUN             VARCHAR(50),
    ADDVCD           CHAR(6)          NOT NULL,
    VLTW             CHAR(40),
    CTCD             CHAR(2)          NOT NULL,
    RVCD             CHAR(8),
    LVCD             CHAR(11),
    BN               CHAR(4),
    LG               CHAR(7),
    LT               CHAR(6),
    CH               CHAR(10),
    DVFL             DECIMAL(7,2),
    CRSCST           CHAR(4),
    CPYR             CHAR(4),
    LCSOV            VARCHAR(3000),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_LCS_BSIN ADD CONSTRAINT PK_WRP_LCS_BSIN PRIMARY KEY (LCSCD, DTUPDT);

-- 灌区基本信息表
CREATE TABLE WRP_IRA_BSIN (
    IRACD            CHAR(10)         NOT NULL,
    IRANM            VARCHAR(40)      NOT NULL,
    IRAHWPRTP        CHAR(1),
    IRASC            VARCHAR(16)      NOT NULL,
    MNUN             VARCHAR(50)      NOT NULL,
    SPUN             VARCHAR(50),
    IRRN             VARCHAR(500),
    LC               CHAR(80)         NOT NULL,
    CTCD             CHAR(2)          NOT NULL,
    DSIRAR           INT,
    ACIRAR           INT,
    CNHWPS           VARCHAR(30),
    CNHWNM           VARCHAR(40),
    CNHDDVFL         DECIMAL(6,2),
    MNCHLEN          DECIMAL(7,2),
    IRAOV            VARCHAR(500),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_IRA_BSIN ADD CONSTRAINT PK_WRP_IRA_BSIN PRIMARY KEY (IRACD, DTUPDT);

-- 水力发电工程基本信息表
CREATE TABLE WRP_HPP_BSIN (
    PWPRCD           CHAR(10)         NOT NULL,
    PWPRNM           VARCHAR(40)      NOT NULL,
    PWPRTP           VARCHAR(10),
    MNUN             VARCHAR(50)      NOT NULL,
    SPUN             VARCHAR(50),
    LC               VARCHAR(80)      NOT NULL,
    ADDVCD           CHAR(6)          NOT NULL,
    CT               VARCHAR(60)      NOT NULL,
    RV               VARCHAR(40),
    LG               CHAR(7),
    LT               CHAR(6),
    INCP             DECIMAL(8,4),
    AVANENOT         DECIMAL(12,4),
    CPYR             CHAR(4),
    PWPROV           VARCHAR(500),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_HPP_BSIN ADD CONSTRAINT PK_WRP_HPP_BSIN PRIMARY KEY (PWPRCD, DTUPDT);

-- 水土保持工程基本信息表
CREATE TABLE WRP_SWC_BSIN (
    SWCPRCD          CHAR(10)         NOT NULL,
    SWCPRNM          VARCHAR(40)      NOT NULL,
    SWCPRTP          VARCHAR(42),
    MNUN             VARCHAR(50)      NOT NULL,
    SPUN             VARCHAR(50),
    LC               VARCHAR(80)      NOT NULL,
    ADDVCD           CHAR(6)          NOT NULL,
    ENMS             VARCHAR(100),
    CPYR             CHAR(4),
    SCWPROV          VARCHAR(500),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_SWC_BSIN ADD CONSTRAINT PK_WRP_SWC_BSIN PRIMARY KEY (SWCPRCD, DTUPDT);

-- 水库功能表
CREATE TABLE WRP_RSR_FN (
    RSCD             CHAR(11)         NOT NULL,
    RSFNIM           INT              NOT NULL,
    RSFN             CHAR(4)          NOT NULL,
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_FN ADD CONSTRAINT PK_WRP_RSR_FN PRIMARY KEY (RSCD, RSFN);

-- 水库水文特征表
CREATE TABLE WRP_RSR_HYCH (
    RSCD             CHAR(11)         NOT NULL,
    CNCTAR           DECIMAL(10,3),
    RVCRLEN          DECIMAL(6,2),
    RVCRGR           DECIMAL(6,2),
    AVANPRAM         DECIMAL(5,1),
    AVANRNAM         DECIMAL(10,2),
    AVANSDAM         DECIMAL(10,2),
    MYAVGMINTP       DECIMAL(4,1),
    DSRCIN           INT,
    DSPKFL           DECIMAL(7,2),
    DSFLVLONDY       DECIMAL(10,2),
    DSFLVLTHDY       DECIMAL(10,2),
    CHRCIN           INT,
    CHPKFL           DECIMAL(7,2),
    CHFLDR           INT,
    CHFLVL           DECIMAL(10,2),
    RSRRGTPFM        VARCHAR(12),
    CHFLLV           DECIMAL(6,2),
    DSFLLV           DECIMAL(6,2),
    FLCNHGWL         DECIMAL(6,2),
    MJFLSSCNWL       DECIMAL(6,2),
    NRSTLV           DECIMAL(6,2),
    DDWL             DECIMAL(6,2),
    TTSTCP           DECIMAL(10,2),
    FLSTCP           DECIMAL(10,2),
    FLCNSTCP         DECIMAL(10,2),
    ACSTCP           DECIMAL(10,2),
    DDSTCP           DECIMAL(10,2),
    DTUPDT           DATETIME
);
ALTER TABLE WRP_RSR_HYCH ADD CONSTRAINT PK_WRP_RSR_HYCH PRIMARY KEY (RSCD);

-- 大坝表
CREATE TABLE WRP_RSR_DM (
    RSCD             CHAR(11)         NOT NULL,
    DMCD             CHAR(13)         NOT NULL,
    DMNM             VARCHAR(40)      NOT NULL,
    DMBSGLCN         INT,
    DMTP             CHAR(1),
    MAXDMHG          DECIMAL(5,2)     NOT NULL,
    DMCREL           DECIMAL(6,2)     NOT NULL,
    WVWLTPEL         DECIMAL(7,2),
    DMCRLEN          DECIMAL(8,2),
    DMCRWD           DECIMAL(7,2),
    ASELST           CHAR(1),
    ASELTPEL         VARCHAR(12),
    DMBSASMS         DECIMAL(6,2),
    DRELST           CHAR(1),
    DTUPDT           DATETIME,
    DMTPNM           VARCHAR(50)
);
ALTER TABLE WRP_RSR_DM ADD CONSTRAINT PK_WRP_RSR_DM PRIMARY KEY (RSCD, DMCD);

-- 溢洪道表
CREATE TABLE WRP_RSR_SW (
    RSCD             CHAR(11)         NOT NULL,
    SWCD             CHAR(13)         NOT NULL,
    SWNM             VARCHAR(40)      NOT NULL,
    LYPS             VARCHAR(8),
    STST             VARCHAR(6),
    CRMT             CHAR(8),
    WRCREL           DECIMAL(6,2),
    WRCRNTWD         DECIMAL(5,2),
    OFWRST           VARCHAR(6),
    GTST             VARCHAR(14),
    GTSZ             VARCHAR(60),
    GTQN             INT,
    MAXDSCP          DECIMAL(7,2),
    ENDSST           VARCHAR(8),
    HSDV             VARCHAR(12),
    HSDVQN           INT,
    PWCN             VARCHAR(200),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_SW ADD CONSTRAINT PK_WRP_RSR_SW PRIMARY KEY (RSCD, SWCD, DTUPDT);

-- 非常溢洪道表
CREATE TABLE WRP_RSR_EMSW (
    RSCD             CHAR(11)         NOT NULL,
    EMSWCD           CHAR(13)         NOT NULL,
    STST             VARCHAR(6)       NOT NULL,
    SRFLST           INT,
    SRWL             DECIMAL(6,2),
    MAXDSCP          DECIMAL(7,2),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_EMSW ADD CONSTRAINT PK_WRP_RSR_EMSW PRIMARY KEY (RSCD, EMSWCD);

-- 泄洪洞表
CREATE TABLE WRP_RSR_SWTN (
    RSCD             CHAR(11)         NOT NULL,
    SWTNCD           CHAR(13)         NOT NULL,
    SWTNNM           VARCHAR(40)      NOT NULL,
    LYPS             VARCHAR(8),
    STST             VARCHAR(12)      NOT NULL,
    TNLEN            DECIMAL(6,2),
    CRSCSZ           VARCHAR(60),
    INFLEL           DECIMAL(6,2),
    OTFLEL           DECIMAL(6,2),
    ENDSST           VARCHAR(8),
    GTST             VARCHAR(14),
    MAXDSCP          DECIMAL(7,2),
    HSDV             VARCHAR(12),
    PWCN             VARCHAR(200),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_SWTN ADD CONSTRAINT PK_WRP_RSR_SWTN PRIMARY KEY (RSCD, SWTNCD);

-- 输水洞表
CREATE TABLE WRP_RSR_WTCNTN (
    RSCD             CHAR(11)         NOT NULL,
    WTCNTNCD         CHAR(13)         NOT NULL,
    WTCNTNNM         VARCHAR(40)      NOT NULL,
    WTCNTNFN         CHAR(40),
    LYPS             VARCHAR(8),
    STST             VARCHAR(12)      NOT NULL,
    TNLEN            DECIMAL(6,2),
    CRSCSZ           VARCHAR(60),
    INFLEL           DECIMAL(6,2),
    OTFLEL           DECIMAL(6,2),
    ENDSST           VARCHAR(8),
    GTST             VARCHAR(14),
    MAXDSCP          DECIMAL(6,1),
    HSDV             VARCHAR(12),
    PWCN             VARCHAR(200),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_WTCNTN ADD CONSTRAINT PK_WRP_RSR_WTCNTN PRIMARY KEY (RSCD, WTCNTNCD);

-- 水电站表
CREATE TABLE WRP_RSR_HPST (
    RSCD             CHAR(11)         NOT NULL,
    HPSTCD           CHAR(13)         NOT NULL,
    CPYR             CHAR(4),
    DVST             CHAR(12),
    INCP             DECIMAL(8,4)
);
ALTER TABLE WRP_RSR_HPST ADD CONSTRAINT PK_WRP_RSR_HPST PRIMARY KEY (RSCD);

-- 水库工程效益表
CREATE TABLE WRP_RSR_BN (
    RSCD             CHAR(11)         NOT NULL,
    RVSFDS           DECIMAL(7,2),
    FLBNAR           DECIMAL(10,3),
    FLBNPP           INT,
    FLBNCN           VARCHAR(100),
    FLBNTW           VARCHAR(100),
    FLBNFL           DECIMAL(7,3),
    FLBNRW           VARCHAR(100),
    FLBNRD           VARCHAR(100),
    DSIRAR           DECIMAL(10,3),
    EFIRAR           DECIMAL(10,3),
    MAXIRAR          DECIMAL(10,3),
    DSANWTSP         DECIMAL(10,2),
    URANURWTSP       DECIMAL(10,2),
    INANINWTSP       DECIMAL(10,2),
    PLANHMANWTSP     DECIMAL(10,2),
    AVANWTSP         DECIMAL(10,2),
    AVANENOT         DECIMAL(12,4),
    TTINCP           DECIMAL(8,4),
    NVIM             VARCHAR(600),
    ENBN             VARCHAR(400),
    WTPRGR           CHAR(1),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_BN ADD CONSTRAINT PK_WRP_RSR_BN PRIMARY KEY (RSCD, DTUPDT);

-- 下游影响表
CREATE TABLE WRP_RSR_DSIN (
    RSCD             CHAR(11)         NOT NULL,
    NAR              DECIMAL(10,3),
    INPP             INT,
    INCN             VARCHAR(100),
    INTW             VARCHAR(100),
    INFL             DECIMAL(6,2),
    INRW             VARCHAR(100),
    INRD             VARCHAR(100),
    INECAG           DECIMAL(10,2),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_DSIN ADD CONSTRAINT PK_WRP_RSR_DSIN PRIMARY KEY (RSCD, DTUPDT);

-- 水库建设基本情况表
CREATE TABLE WRP_RSR_CNBSIN (
    RSCD             CHAR(11)         NOT NULL,
    STDT             DATE             NOT NULL,
    CNTP             CHAR(4)          NOT NULL,
    DSUN             VARCHAR(50),
    DSUNQL           CHAR(4),
    PRDSAPDP         VARCHAR(50),
    PRDSAPFL         VARCHAR(60),
    PRDSAPDT         DATE,
    PRTTIN           DECIMAL(10,2),
    DSIMEL           DECIMAL(6,2),
    ACIMEL           DECIMAL(6,2),
    DSIMAM           INT,
    ACIMAM           INT,
    PRCRUN           VARCHAR(50),
    CMUN             VARCHAR(50),
    BDST             VARCHAR(8),
    BDPR             DECIMAL(4,1),
    SPUN             VARCHAR(150),
    SPUNQL           CHAR(4),
    CNUN             VARCHAR(150),
    CNUNQL           CHAR(4),
    QLSPUN           VARCHAR(150),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_CNBSIN ADD CONSTRAINT PK_WRP_RSR_CNBSIN PRIMARY KEY (RSCD, STDT, DTUPDT);

-- 水库建设过程表
CREATE TABLE WRP_RSR_CNPR (
    RSCD             CHAR(11)         NOT NULL,
    STDT             DATE             NOT NULL,
    DDLN             DATE             NOT NULL,
    SGDSCHCN         INT,
    CMPYCP           DECIMAL(10,2),
    ARCP             DECIMAL(10,2),
    PRPR             VARCHAR(3000),
    DMPR             DECIMAL(4,1),
    SWPR             DECIMAL(4,1),
    WCTPR            DECIMAL(4,1),
    HYSTPR           DECIMAL(4,1),
    MNINPR           DECIMAL(4,1),
    OTPR             DECIMAL(4,1),
    QLSFRC           VARCHAR(2000),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_CNPR ADD CONSTRAINT PK_WRP_RSR_CNPR PRIMARY KEY (RSCD, STDT, DDLN, DTUPDT);

-- 水库工程验收表
CREATE TABLE WRP_RSR_ENAC (
    RSCD             CHAR(11)         NOT NULL,
    STDT             DATE             NOT NULL,
    ACDT             DATE             NOT NULL,
    ACPRUN           VARCHAR(150),
    ACPRUNTP         CHAR(8),
    ACTP             VARCHAR(32),
    QLEV             VARCHAR(6),
    ACAPRP           IMAGE,
    ACAPSRPTP        CHAR(20),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_ENAC ADD CONSTRAINT PK_WRP_RSR_ENAC PRIMARY KEY (RSCD, STDT, ACDT, DTUPDT);

-- 水库管理体制表
CREATE TABLE WRP_RSR_MNSYS (
    RSCD             CHAR(11)         NOT NULL,
    SPUNNM           CHAR(50)         NOT NULL,
    SPUNHD           CHAR(20)         NOT NULL,
    SPUNAD           CHAR(50)         NOT NULL,
    SPUNPC           CHAR(6)          NOT NULL,
    SPUNTEL          CHAR(15)         NOT NULL,
    SPUNFAX          CHAR(15),
    MNUNNM           CHAR(50),
    MNUNAD           CHAR(50),
    MNUNPC           CHAR(6),
    MNUNTEL          CHAR(15),
    MNUNFAX          CHAR(15),
    MNUNEMAM         INT,
    MNUNENAM         INT,
    MNUNSNENAM       INT,
    RVBSADOR         CHAR(1),
    TRGV             CHAR(80),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_MNSYS ADD CONSTRAINT PK_WRP_RSR_MNSYS PRIMARY KEY (RSCD, DTUPDT);

-- 水库运行管理表
CREATE TABLE WRP_RSR_OPMN (
    RSCD             CHAR(11)         NOT NULL,
    SDSTCP           DECIMAL(10,2),
    USSDEL           DECIMAL(6,2),
    SDMSDT           DATE,
    HSMAXFLLV        DECIMAL(6,2),
    HSMAXFLDT        DATE,
    HSMAXDSFL        DECIMAL(7,2),
    HSJWRSWL         DECIMAL(6,2),
    HSLWRSWLDT       DATE,
    HSHGSTLV         DECIMAL(6,2),
    HSMAXST          DECIMAL(10,2),
    OPMNMM           VARCHAR(3000),
    HYMNMT           CHAR(1),
    HYMNSYCNST       CHAR(1),
    ENMNMT           CHAR(1),
    ENMNSYCNST       CHAR(1),
    MAXSP            DECIMAL(6,2),
    TTSTCP           DECIMAL(4,1),
    RSSPRDLEN        INT,
    RDCNCTSTU        CHAR(1),
    RDCNCN           CHAR(1),
    MNBLAR           INT,
    ENMNAR           INT,
    ENPRAR           INT,
    RGAFLNAR         INT,
    RSARSGLS         VARCHAR(600),
    RSWQCT           CHAR(1),
    MBPLSR           CHAR(1),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_OPMN ADD CONSTRAINT PK_WRP_RSR_OPMN PRIMARY KEY (RSCD, DTUPDT);

-- 水库水情监测项目表
CREATE TABLE WRP_RSR_HYMNIT (
    RSCD             CHAR(11)         NOT NULL,
    HYMNIT           VARCHAR(12)      NOT NULL,
    STAM             INT              NOT NULL,
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_HYMNIT ADD CONSTRAINT PK_WRP_RSR_HYMNIT PRIMARY KEY (RSCD, HYMNIT, DTUPDT);

-- 水库工情监测项目表
CREATE TABLE WRP_RSR_ENMNIT (
    RSCD             CHAR(11)         NOT NULL,
    ENMNIT           VARCHAR(12)      NOT NULL,
    CRSC             VARCHAR(7)       NOT NULL,
    STAM             INT              NOT NULL,
    MNDV             VARCHAR(100),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_ENMNIT ADD CONSTRAINT PK_WRP_RSR_ENMNIT PRIMARY KEY (RSCD, ENMNIT, CRSC, DTUPDT);

-- 水库注册登记表
CREATE TABLE WRP_RSR_RG (
    RSCD             CHAR(11)         NOT NULL,
    RGDT             DATE             NOT NULL,
    RGAT             CHAR(50),
    CTDP             CHAR(50),
    RGNM             CHAR(18),
    RGVLDT           DATE,
    RGRSNM           CHAR(40),
    RGPRSC           CHAR(1),
    RHTTSTCP         DECIMAL(10,2),
    RGMNDMMAXH       DECIMAL(6,2),
    RGRSMNUN         CHAR(50),
    RGRSSPUN         CHAR(50),
    RGCT             IMAGE,
    RGCTFLTP         CHAR(20),
    RGFM             IMAGE,
    RGFMLTP          CHAR(20),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_RG ADD CONSTRAINT PK_WRP_RSR_RG PRIMARY KEY (RSCD, RGDT, DTUPDT);

-- 大坝安全鉴定表
CREATE TABLE WRP_RSR_DMSFAPS (
    RSCD             CHAR(11)         NOT NULL,
    APSDT            DATE             NOT NULL,
    DMSFCL           CHAR(1),
    APSORUN          VARCHAR(50),
    SFEVUN           VARCHAR(50),
    SFEVUNQL         CHAR(1),
    VLDP             VARCHAR(50),
    VLDPLV           CHAR(1),
    FLSFAPSOP        CHAR(1),
    STSFAPSOP        CHAR(1),
    SPSFAPSOP        CHAR(1),
    SSSFAPSOP        CHAR(1),
    MTSTSFAPSOP      CHAR(1),
    OTENPR           VARCHAR(200),
    APSMNPR          VARCHAR(1000),
    DMSFAPSRPPTH     VARCHAR(400),
    DMSFAPSRP        IMAGE,
    DMAPSRPTP        VARCHAR(20),
    DTUPDT           DATETIME         NOT NULL
);
ALTER TABLE WRP_RSR_DMSFAPS ADD CONSTRAINT PK_WRP_RSR_DMSFAPS PRIMARY KEY (RSCD, APSDT, DTUPDT);

-- 水库应急预案表
CREATE TABLE WRP_RSR_EMPR (
    RSCD             CHAR(11)         NOT NULL,
    RLDT             DATE             NOT NULL,
    CPLTUT           VARCHAR(50),
    APDP             VARCHAR(50),
    APNM             VARCHAR(60),
    APDT             DATE,
    VLDDT            DATE,
    CHCMD            VARCHAR(20),
    EMOFTEL          VARCHAR(15),
    EXST             CHAR(1),
    EMPRPTH          VARCHAR(400),
    EMPR             IMAGE,
    EMPRFLTP         VARCHAR(20),
    DTUPDT           DATETIME         NOT NULL
);
ALTER TABLE WRP_RSR_EMPR ADD CONSTRAINT PK_WRP_RSR_EMPR PRIMARY KEY (RSCD, RLDT, DTUPDT);

-- 水库管理制度表
CREATE TABLE WRP_RSR_REGIME (
    RSCD             CHAR(11)         NOT NULL,
    RGNM             VARCHAR(50)      NOT NULL,
    RLDT             DATE             NOT NULL,
    APDP             VARCHAR(50)      NOT NULL,
    APDT             DATE             NOT NULL,
    VLDDT            DATE             NOT NULL,
    APNM             VARCHAR(50),
    RGPTH            VARCHAR(100),
    RGFL             IMAGE,
    RGFLTP           VARCHAR(100),
    DTUPDT           DATETIME         NOT NULL
);
ALTER TABLE WRP_RSR_REGIME ADD CONSTRAINT PK_WRP_RSR_REGIME PRIMARY KEY (RSCD, DTUPDT);

-- 水库维修养护表
CREATE TABLE WRP_RSR_MAINTAIN (
    RSCD             CHAR(11)         NOT NULL,
    MTNM             VARCHAR(50)      NOT NULL,
    RLDT             DATE             NOT NULL,
    APDP             VARCHAR(50)      NOT NULL,
    APDT             DATE             NOT NULL,
    VLDDT            DATE             NOT NULL,
    APNM             VARCHAR(50),
    MTPTH            VARCHAR(100),
    MTFL             IMAGE,
    MTFLTP           VARCHAR(100),
    DTUPDT           DATETIME         NOT NULL
);
ALTER TABLE WRP_RSR_MAINTAIN ADD CONSTRAINT PK_WRP_RSR_MAINTAIN PRIMARY KEY (RSCD, RLDT, DTUPDT);

-- 水库升降等报废表
CREATE TABLE WRP_RSR_AB (
    RSCD             CHAR(11)         NOT NULL,
    CHTP             CHAR(6)          NOT NULL,
    PRCMDT           DATE             NOT NULL,
    MNCS             VARCHAR(8),
    DMUN             VARCHAR(40),
    DMUNQL           CHAR(4),
    APDP             VARCHAR(40),
    APDT             DATE,
    APCN             VARCHAR(400),
    AFPROV           VARCHAR(8),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_AB ADD CONSTRAINT PK_WRP_RSR_AB PRIMARY KEY (RSCD, CHTP, PRCMDT, DTUPDT);

-- 水库大坝险情表
CREATE TABLE WRP_RSR_DNST (
    RSCD             CHAR(11)         NOT NULL,
    DNSTTM           DATETIME         NOT NULL,
    DNSTNM           VARCHAR(40),
    DNSTGR           VARCHAR(8),
    DNSTPS           VARCHAR(100),
    DNSTOV           VARCHAR(1500),
    DNELMS           VARCHAR(1500),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_DNST ADD CONSTRAINT PK_WRP_RSR_DNST PRIMARY KEY (RSCD, DNSTTM, DTUPDT);

-- 水库多媒体文件表
CREATE TABLE WRP_RSR_MLFL (
    RSCD             CHAR(11)         NOT NULL,
    FLCD             CHAR(3)          NOT NULL,
    FLNM             CHAR(40)         NOT NULL,
    FLTP             CHAR(20),
    FL               IMAGE            NOT NULL,
    FLPTH            VARCHAR(200),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_MLFL ADD CONSTRAINT PK_WRP_RSR_MLFL PRIMARY KEY (RSCD, FLCD, DTUPDT);

-- 水位-库容-面积关系表
CREATE TABLE WRP_RSR_WLSTCPARRL (
    RSCD             CHAR(11)         NOT NULL,
    WL               DECIMAL(6,2)     NOT NULL,
    STCP             DECIMAL(10,2)    NOT NULL,
    AR               DECIMAL(8,2)     NOT NULL,
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_RSR_WLSTCPARRL ADD CONSTRAINT PK_WRP_RSR_WLSTCPARRL PRIMARY KEY (RSCD, WL, DTUPDT);

-- 堤防(段)设防标准表
CREATE TABLE WRP_LEV_FLCNST (
    LVCD             CHAR(11)         NOT NULL,
    FLCNST           INT,
    DSFLLV           DECIMAL(6,2),
    DSPKFL           DECIMAL(7,2),
    FRWL             DECIMAL(6,2),
    WRWL             DECIMAL(6,2),
    DVFLLV           DECIMAL(6,2),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_LEV_FLCNST ADD CONSTRAINT PK_WRP_LEV_FLCNST PRIMARY KEY (LVCD, DTUPDT);

-- 堤防(段)工程结构表
CREATE TABLE WRP_LEV_ST (
    LVCD             CHAR(11)         NOT NULL,
    LVCREL           DECIMAL(6,2),
    FLCNWLTPEL       DECIMAL(6,2),
    LEVCRTWD         DECIMAL(5,2),
    ASELST           CHAR(1),
    ASELTPEL         DECIMAL(6,2),
    ASELHG           DECIMAL(5,2),
    LVBSASMS         CHAR(1),
    RVSDSLRT         CHAR(10),
    RVSDTOEEL        DECIMAL(6,2),
    LNSDSLRT         CHAR(10),
    LNSDTOEEL        DECIMAL(6,2),
    HASRVSDBN        CHAR(1),
    HASLNSDBN        CHAR(1),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_LEV_ST ADD CONSTRAINT PK_WRP_LEV_ST PRIMARY KEY (LVCD);

-- 堤防(段)工程效益表
CREATE TABLE WRP_LEV_BN (
    LVCD             CHAR(11)         NOT NULL,
    PRAR             DECIMAL(9,3),
    PRPP             INT,
    PRRW             INT,
    PRRD             INT,
    PRTWAM           INT,
    PRFLAR           DECIMAL(9,3),
    PRECAG           DECIMAL(12,4),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_LEV_BN ADD CONSTRAINT PK_WRP_LEV_BN PRIMARY KEY (LVCD);

-- 堤防(段)建设基本情况表
CREATE TABLE WRP_LEV_CNBSIN (
    LVCD             CHAR(11)         NOT NULL,
    STDT             DATE             NOT NULL,
    CNTP             CHAR(4)          NOT NULL,
    FSRPTAPDP        VARCHAR(50),
    FSRPTAPFL        VARCHAR(60),
    FSRPTAPDT        DATE,
    DSUN             VARCHAR(50),
    DSUNQL           CHAR(4),
    PRDSAPDP         VARCHAR(50),
    PRDSAPFL         VARCHAR(60),
    PRDSAPDT         DATE,
    STAPDP           VARCHAR(50),
    STAPFL           VARCHAR(60),
    STAPDT           DATE,
    DSPRIN           DECIMAL(10,2),
    LVIN             DECIMAL(10,2),
    MNININ           DECIMAL(10,2),
    OTIN             DECIMAL(10,2),
    PRCRUN           VARCHAR(50),
    CRUNAPDT         DATE,
    CMUN             VARCHAR(50),
    MNBDST           VARCHAR(8),
    BDPR             DECIMAL(4,1),
    SPUN             VARCHAR(150),
    SPUNQL           CHAR(4),
    CNUN             VARCHAR(150),
    CNUNQL           CHAR(4),
    QLSPUN           VARCHAR(150)
);
ALTER TABLE WRP_LEV_CNBSIN ADD CONSTRAINT PK_WRP_LEV_CNBSIN PRIMARY KEY (LVCD, STDT);

-- 堤防(段)建设过程表
CREATE TABLE WRP_LEV_CNPR (
    LVCD             CHAR(11)         NOT NULL,
    STDT             DATE             NOT NULL,
    DDLN             DATE             NOT NULL,
    MJDSCHCN         INT,
    ACISCP           DECIMAL(10,2),
    ARCP             DECIMAL(10,2),
    PRPR             VARCHAR(3000),
    LVPR             DECIMAL(4,1),
    MNINPR           DECIMAL(4,1),
    OTPR             DECIMAL(4,1),
    QLSFRC           VARCHAR(2000),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_LEV_CNPR ADD CONSTRAINT PK_WRP_LEV_CNPR PRIMARY KEY (LVCD, STDT, DDLN, DTUPDT);

-- 堤防(段)工程验收表
CREATE TABLE WRP_LEV_ENAC (
    LVCD             CHAR(11)         NOT NULL,
    STDT             DATE             NOT NULL,
    ACDT             DATE             NOT NULL,
    ACPRUN           VARCHAR(150),
    ACPRUNTP         CHAR(8),
    ACTP             VARCHAR(32),
    QLEV             VARCHAR(6),
    ACAPRP           IMAGE
);
ALTER TABLE WRP_LEV_ENAC ADD CONSTRAINT PK_WRP_LEV_ENAC PRIMARY KEY (LVCD, STDT, ACDT);

-- 堤防(段)管理体制表
CREATE TABLE WRP_LEV_MNSYS (
    LVCD             CHAR(11)         NOT NULL,
    PRNM             VARCHAR(40)      NOT NULL,
    PRLGRP           VARCHAR(20)      NOT NULL,
    PRAD             VARCHAR(50)      NOT NULL,
    PRPC             CHAR(6)          NOT NULL,
    PRTEL            VARCHAR(15)      NOT NULL,
    PRFAX            VARCHAR(15)      NOT NULL,
    MNUNNM           VARCHAR(40),
    MNUNAD           VARCHAR(50),
    MNUNPC           CHAR(6),
    MNUNTEL          VARCHAR(15),
    MNUNFAX          VARCHAR(15),
    SPUNNM           VARCHAR(40),
    SPUNLV           VARCHAR(4),
    SPUNADDVCD       CHAR(6),
    SPUNAD           VARCHAR(50),
    SPUNPC           CHAR(6),
    SPUNTEL          VARCHAR(15),
    SPUNFAX          VARCHAR(15),
    PRBLSYS          VARCHAR(8),
    WTADBSAT         VARCHAR(14)
);
ALTER TABLE WRP_LEV_MNSYS ADD CONSTRAINT PK_WRP_LEV_MNSYS PRIMARY KEY (LVCD);

-- 堤防(段)运行管理表
CREATE TABLE WRP_LEV_OPMN (
    LVCD             CHAR(11)         NOT NULL,
    HSHGWL           DECIMAL(6,2)     NOT NULL,
    HSHGWLTM         DATETIME,
    HSMAXFL          DECIMAL(6,2),
    HSMAXFLTM        DATETIME,
    ENMNMT           CHAR(1),
    ENMNSYCNST       CHAR(1),
    LVCNEDAM         INT,
    LVCNRDLEN        DECIMAL(8,3),
    LVCNRDGR         CHAR(1),
    TRMNAM           INT,
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_LEV_OPMN ADD CONSTRAINT PK_WRP_LEV_OPMN PRIMARY KEY (LVCD);

-- 堤防(段)监测项目表
CREATE TABLE WRP_LEV_MNIT (
    LVCD             CHAR(11)         NOT NULL,
    ENMNIT           VARCHAR(20)      NOT NULL,
    CRSC             VARCHAR(7)       NOT NULL,
    STAM             INT              NOT NULL,
    MNDV             VARCHAR(100),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_LEV_MNIT ADD CONSTRAINT PK_WRP_LEV_MNIT PRIMARY KEY (LVCD, ENMNIT, CRSC, DTUPDT);

-- 堤防(段)决溢记录表
CREATE TABLE WRP_LEV_BROF (
    LVCD             CHAR(11)         NOT NULL,
    BROFBGTM         DATETIME         NOT NULL,
    BROFCMTM         DATETIME         NOT NULL,
    BROFLC           VARCHAR(80),
    BROFWL           DECIMAL(6,2),
    BROFDS           DECIMAL(9,2),
    BROFPR           VARCHAR(1000),
    BROFCS           VARCHAR(200),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_LEV_BROF ADD CONSTRAINT PK_WRP_LEV_BROF PRIMARY KEY (LVCD, BROFBGTM, DTUPDT);

-- 堤防(段)决溢处理情况表
CREATE TABLE WRP_LEV_BROFEMMS (
    LVCD             CHAR(11)         NOT NULL,
    BROFBGTM         DATETIME         NOT NULL,
    SMAR             DECIMAL(9,3),
    SMCNAM           INT,
    SMTWAM           INT,
    SMIS             VARCHAR(500),
    ECLS             DECIMAL(12,2),
    EMMS             VARCHAR(200)     NOT NULL,
    EMUN             VARCHAR(200),
    EMFNTM           DATETIME,
    BROFINRP         IMAGE,
    BROFINRPTP       CHAR(20),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_LEV_BROFEMMS ADD CONSTRAINT PK_WRP_LEV_BROFEMMS PRIMARY KEY (LVCD, BROFBGTM, EMMS, DTUPDT);

-- 堤防(段)工程图表表
CREATE TABLE WRP_LEV_ENDR (
    LVCD             CHAR(11)         NOT NULL,
    ENDRCD           CHAR(3)          NOT NULL,
    ENDRNM           VARCHAR(40)      NOT NULL,
    ENDRTP           VARCHAR(20)      NOT NULL,
    ENDR             IMAGE            NOT NULL
);
ALTER TABLE WRP_LEV_ENDR ADD CONSTRAINT PK_WRP_LEV_ENDR PRIMARY KEY (LVCD, ENDRCD);

-- 水闸功能表
CREATE TABLE WRP_SLU_FN (
    SLCD             CHAR(11)         NOT NULL,
    SLFNIM           INT              NOT NULL,
    SLFN             CHAR(4)          NOT NULL,
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_SLU_FN ADD CONSTRAINT PK_WRP_SLU_FN PRIMARY KEY (SLCD, SLFNIM, DTUPDT);

-- 水文与水闸特征表
CREATE TABLE WRP_SLU_HYCH (
    SLCD             CHAR(11)         NOT NULL,
    RVWD             DECIMAL(6,2),
    RVGR             DECIMAL(6,2),
    AVANRNAM         DECIMAL(10,2),
    AVANSDAM         DECIMAL(10,2),
    MYAVGMINTP       DECIMAL(4,1),
    DSRCIN           INT,
    DSPKFL           DECIMAL(7,2),
    CHRICN           INT,
    CHPKFL           DECIMAL(7,2),
    DSDS             DECIMAL(7,2),
    DSUSWL           DECIMAL(6,2),
    DSDSWL           DECIMAL(6,2),
    CHDS             DECIMAL(7,2),
    CHUSWL           DECIMAL(6,2),
    CHDSWL           DECIMAL(6,2),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_SLU_HYCH ADD CONSTRAINT PK_WRP_SLU_HYCH PRIMARY KEY (SLCD, DTUPDT);

-- 水闸工程结构表
CREATE TABLE WRP_SLU_ENST (
    SLCD             CHAR(11)         NOT NULL,
    SLBSGLCN         VARCHAR(600),
    NRGTSLST         VARCHAR(200),
    SLWRST           CHAR(1),
    GTHLAM           INT,
    GTHLNTHG         DECIMAL(5,2),
    GTHLNTWD         DECIMAL(5,2),
    GTTTWD           DECIMAL(5,2),
    GTTTLEN          DECIMAL(6,2),
    GTTPEL           DECIMAL(6,2),
    GTFLEL           DECIMAL(6,2),
    ENDSST           VARCHAR(8),
    GTST             VARCHAR(14),
    GTSZ             VARCHAR(60),
    GTDDLD           DECIMAL(5,2),
    GTBSASMS         VARCHAR(12),
    SRBRWD           DECIMAL(4,2),
    SRBREL           DECIMAL(6,2),
    EMBRWD           DECIMAL(4,2),
    EMBREL           DECIMAL(6,2),
    ACBRST           VARCHAR(40),
    ACBRWD           DECIMAL(4,2),
    ACBREL           DECIMAL(6,2),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_SLU_ENST ADD CONSTRAINT PK_WRP_SLU_ENST PRIMARY KEY (SLCD, DTUPDT);

-- 水闸机电设备表
CREATE TABLE WRP_SLU_MCELEQ (
    SLCD             CHAR(11)         NOT NULL,
    HSEQ             CHAR(1),
    HSGRAM           INT,
    PUHSPW           DECIMAL(5,2),
    PWSPCN           VARCHAR(40),
    ELHSVL           DECIMAL(3,2),
    FLGTDR           DECIMAL(3,1),
    EMGTST           VARCHAR(14),
    EMGTAM           INT,
    TTINCP           INT,
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_SLU_MCELEQ ADD CONSTRAINT PK_WRP_SLU_MCELEQ PRIMARY KEY (SLCD, DTUPDT);

-- 水闸工程效益表
CREATE TABLE WRP_SLU_BN (
    SLCD             CHAR(11)         NOT NULL,
    FLPRDRBN         VARCHAR(400),
    NVBN             VARCHAR(400),
    IRWTSPBN         VARCHAR(400),
    PWGNBN           VARCHAR(400),
    ENBN             VARCHAR(400),
    CMBN             VARCHAR(400),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_SLU_BN ADD CONSTRAINT PK_WRP_SLU_BN PRIMARY KEY (SLCD, DTUPDT);

-- 水闸建设基本情况表
CREATE TABLE WRP_SLU_CNBSIN (
    SLCD             CHAR(11)         NOT NULL,
    STDT             DATE             NOT NULL,
    CNTP             CHAR(4)          NOT NULL,
    FSRPTAPDP        VARCHAR(50),
    FSRPTAPFL        VARCHAR(60),
    FSRPTAPDT        DATE,
    DSUN             VARCHAR(50),
    DSUNQL           CHAR(4),
    PRDSAPDP         VARCHAR(50),
    PRDSAPFL         VARCHAR(60),
    PRDSAPDT         DATE,
    STAPDP           VARCHAR(50),
    STAPFL           VARCHAR(60),
    STAPDT           DATE,
    DSPRIN           DECIMAL(10,2),
    SLIN             DECIMAL(10,2),
    MNININ           DECIMAL(10,2),
    OTIN             DECIMAL(10,2),
    DSIMEL           DECIMAL(6,2),
    ACIMEL           DECIMAL(6,2),
    DSIMAM           INT,
    ACIMAM           INT,
    LTSTSPIMAM       INT,
    SMFL             INT,
    PRCRUN           VARCHAR(50),
    CRUNAPDT         DATE,
    CMUN             VARCHAR(50),
    MNBDST           VARCHAR(8),
    BDPR             DECIMAL(4,1),
    SPUN             VARCHAR(150),
    SPUNQL           CHAR(4),
    CNUN             VARCHAR(150),
    CNUNQL           CHAR(4),
    QLSPUN           VARCHAR(150)
);
ALTER TABLE WRP_SLU_CNBSIN ADD CONSTRAINT PK_WRP_SLU_CNBSIN PRIMARY KEY (SLCD, STDT);

-- 水闸建设过程表
CREATE TABLE WRP_SLU_CNPR (
    SLCD             CHAR(11)         NOT NULL,
    STDT             DATE             NOT NULL,
    DDLN             DATE             NOT NULL,
    SGDSCHCN         INT,
    CMPYCP           DECIMAL(10,2),
    ARCP             DECIMAL(10,2),
    PRPR             VARCHAR(3000),
    SLPR             DECIMAL(4,1),
    MNINPR           DECIMAL(4,1),
    OTPR             DECIMAL(4,1),
    QLSFRC           VARCHAR(2000),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_SLU_CNPR ADD CONSTRAINT PK_WRP_SLU_CNPR PRIMARY KEY (SLCD, STDT, DDLN, DTUPDT);

-- 水闸工程验收表
CREATE TABLE WRP_SLU_CNAP (
    SLCD             CHAR(11)         NOT NULL,
    STDT             DATE             NOT NULL,
    ACDT             DATE             NOT NULL,
    ACPRUN           VARCHAR(150),
    ACPRUNTP         CHAR(8),
    ACTP             VARCHAR(32),
    QLEV             VARCHAR(6),
    ACAPRP           IMAGE
);
ALTER TABLE WRP_SLU_CNAP ADD CONSTRAINT PK_WRP_SLU_CNAP PRIMARY KEY (SLCD, STDT, ACDT);

-- 水闸管理体制表
CREATE TABLE WRP_SLU_MNSYS (
    SLCD             CHAR(11)         NOT NULL,
    PRNM             VARCHAR(40)      NOT NULL,
    PRLGRP           VARCHAR(20)      NOT NULL,
    PRAD             VARCHAR(50)      NOT NULL,
    PRPC             CHAR(6)          NOT NULL,
    PRTEL            VARCHAR(15)      NOT NULL,
    PRFAX            VARCHAR(15)      NOT NULL,
    MNUNNM           VARCHAR(40),
    MNUNAD           VARCHAR(50),
    MNUNPC           CHAR(6),
    MNUNTEL          VARCHAR(15),
    MNUNFAX          VARCHAR(15),
    SPUNNM           VARCHAR(40),
    SPUNLV           VARCHAR(4),
    SPUNADDVCD       CHAR(6),
    SPUNAD           VARCHAR(50),
    SPUNPC           CHAR(6),
    SPUNTEL          VARCHAR(15),
    SPUNFAX          VARCHAR(15),
    PRBLSYS          VARCHAR(8),
    WTADBSAT         VARCHAR(14),
    PROWGV           VARCHAR(80),
    RFST             VARCHAR(8),
    RFSCFR           VARCHAR(6),
    RFSCAP           VARCHAR(6),
    CLQL             VARCHAR(8),
    TWDTES           VARCHAR(6),
    TWFEFF           VARCHAR(12),
    MNMNSP           VARCHAR(8),
    RFGLAR           CHAR(4)
);
ALTER TABLE WRP_SLU_MNSYS ADD CONSTRAINT PK_WRP_SLU_MNSYS PRIMARY KEY (SLCD);

-- 水闸运行管理表
CREATE TABLE WRP_SLU_OPMN (
    SLCD             CHAR(11)         NOT NULL,
    HSMAXLCFL        DECIMAL(8,1),
    HSMAXLFDT        DATE,
    HSHGUSWL         DECIMAL(6,2),
    HSHGUSWLDT       DATE,
    OPMNMM           VARCHAR(3000),
    HYTLMT           VARCHAR(10),
    HYTLSYCNST       VARCHAR(8),
    ENMNMT           VARCHAR(10),
    ENMNSYCNST       VARCHAR(8),
    TTST             DECIMAL(4,1),
    SLSPRDLEN        INT,
    RDCNCTSTU        VARCHAR(8),
    RDCNCN           VARCHAR(14),
    MNBLAR           INT,
    ENMNAR           INT,
    ENPRAR           INT,
    RGAFLNAR         INT,
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_SLU_OPMN ADD CONSTRAINT PK_WRP_SLU_OPMN PRIMARY KEY (SLCD, DTUPDT);

-- 水闸水情监测项目表
CREATE TABLE WRP_SLU_HYMNIT (
    SLCD             CHAR(11)         NOT NULL,
    HYMNIT           VARCHAR(12)      NOT NULL,
    STTP             INT              NOT NULL,
    ENMNIT           VARCHAR(12)      NOT NULL,
    STAM             INT              NOT NULL
);
ALTER TABLE WRP_SLU_HYMNIT ADD CONSTRAINT PK_WRP_SLU_HYMNIT PRIMARY KEY (SLCD, HYMNIT, ENMNIT);

-- 水闸注册登记表
CREATE TABLE WRP_SLU_RG (
    SLCD             CHAR(11)         NOT NULL,
    RGDT             DATE             NOT NULL,
    RGAT             VARCHAR(50),
    CTDP             VARCHAR(40),
    RGNM             CHAR(19),
    RGVLDT           DATE,
    RGSLNM           VARCHAR(40),
    RGMAXDSCP        DECIMAL(8,1),
    RGTTGTWD         DECIMAL(6,2),
    RGMNUN           VARCHAR(50),
    RGSPUN           VARCHAR(50),
    RGCT             IMAGE,
    RGCTFLTP         CHAR(20),
    RGFM             IMAGE,
    RGFMFLTP         CHAR(20),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_SLU_RG ADD CONSTRAINT PK_WRP_SLU_RG PRIMARY KEY (SLCD, RGDT, DTUPDT);

-- 水闸安全鉴定表
CREATE TABLE WRP_SLU_SFAPS (
    SLCD             CHAR(11)         NOT NULL,
    APDT             DATE             NOT NULL,
    SLSFTP           VARCHAR(6)       NOT NULL,
    ORUN             VARCHAR(40),
    STSFTSUN         VARCHAR(40),
    STSFTSUNQL       VARCHAR(10),
    SFEVUN           VARCHAR(40),
    SFEVUNQL         VARCHAR(10),
    VLDP             VARCHAR(40),
    VLDPLV           VARCHAR(4),
    STIMCHCN         VARCHAR(12),
    SSSTCHCN         VARCHAR(12),
    EDECCHCN         VARCHAR(12),
    DSABCHCN         VARCHAR(16),
    CNSTCHCN         VARCHAR(12),
    GTHSGRCHCN       VARCHAR(12),
    ELDVCHCN         VARCHAR(12),
    OBDVCHCN         VARCHAR(12),
    OTENPR           VARCHAR(200),
    APMNPR           VARCHAR(1000),
    SLSFAPRP         IMAGE,
    SLAPSRPTP        CHAR(20),
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_SLU_SFAPS ADD CONSTRAINT PK_WRP_SLU_SFAPS PRIMARY KEY (SLCD, APDT, DTUPDT);

-- 水闸应急预案表
CREATE TABLE WRP_SLU_ENPR (
    SLCD             CHAR(11)         NOT NULL,
    PBDT             DATE             NOT NULL,
    CPLTUT           VARCHAR(40),
    APDP             VARCHAR(40),
    APRPRF           VARCHAR(60),
    APDT             DATE,
    VLDDT            DATE,
    CMD              VARCHAR(20),
    EMOFTEL          VARCHAR(15),
    EXST             VARCHAR(6),
    EMPR             IMAGE
);
ALTER TABLE WRP_SLU_ENPR ADD CONSTRAINT PK_WRP_SLU_ENPR PRIMARY KEY (SLCD);

-- 水闸升降等报废表
CREATE TABLE WRP_SLU_AB (
    SLCD             CHAR(11)         NOT NULL,
    CHTP             CHAR(6)          NOT NULL,
    PRCMDT           DATE             NOT NULL,
    MNCS             VARCHAR(8),
    DMUN             VARCHAR(40),
    DMUNQL           CHAR(4),
    APDP             VARCHAR(40),
    APDT             DATE,
    APCN             VARCHAR(400),
    AFPROV           VARCHAR(8)
);
ALTER TABLE WRP_SLU_AB ADD CONSTRAINT PK_WRP_SLU_AB PRIMARY KEY (SLCD, CHTP, PRCMDT);

-- 水闸出险表
CREATE TABLE WRP_SLU_DNST (
    SLCD             CHAR(11)         NOT NULL,
    DNSTTM           DATETIME         NOT NULL,
    DNSTNM           VARCHAR(40),
    DNSTGR           VARCHAR(8),
    DNSTPS           VARCHAR(100),
    DNSTOV           VARCHAR(1500),
    DNELMS           VARCHAR(1500)
);
ALTER TABLE WRP_SLU_DNST ADD CONSTRAINT PK_WRP_SLU_DNST PRIMARY KEY (SLCD, DNSTTM);

-- 水闸工程图表表
CREATE TABLE WRP_SLU_ENDR (
    SLCD             CHAR(11)         NOT NULL,
    ENDRCD           CHAR(3)          NOT NULL,
    ENDRNM           VARCHAR(40)      NOT NULL,
    ENDRTP           VARCHAR(20)      NOT NULL,
    ENDR             IMAGE            NOT NULL
);
ALTER TABLE WRP_SLU_ENDR ADD CONSTRAINT PK_WRP_SLU_ENDR PRIMARY KEY (SLCD, ENDRCD);

-- 水位-过闸流量关系表
CREATE TABLE WRP_SLU_WLFLRL (
    SLCD             CHAR(11)         NOT NULL,
    USWL             DECIMAL(6,2)     NOT NULL,
    DSWL             DECIMAL(6,2),
    TTFL             DECIMAL(7,2)     NOT NULL,
    DTUPDT           DATE             NOT NULL
);
ALTER TABLE WRP_SLU_WLFLRL ADD CONSTRAINT PK_WRP_SLU_WLFLRL PRIMARY KEY (SLCD, USWL, DTUPDT);

-- 工程险情分类表
CREATE TABLE REI_PRJDCLS (
    DCLSCD           CHAR(4)          NOT NULL,
    DNGNM            CHAR(12)         NOT NULL
);
ALTER TABLE REI_PRJDCLS ADD CONSTRAINT PK_REI_PRJDCLS PRIMARY KEY (DCLSCD, DNGNM);

-- 工程险情基本信息表
CREATE TABLE REI_PRJDBINF (
    DNGCD            CHAR(18)         NOT NULL,
    PRJNMCD          CHAR(12)         NOT NULL,
    WRP              CHAR(3),
    DCLSCD           CHAR(4)          NOT NULL,
    DNGHTM           TIME             NOT NULL,
    DNGPST           VARCHAR(500)     NOT NULL,
    DNGSVT           CHAR(1)          NOT NULL,
    LGTD             CHAR(11)         NOT NULL,
    LTTD             CHAR(10)         NOT NULL,
    DNGRSAN          VARCHAR(1000)    NOT NULL,
    TRMM             VARCHAR(1000)    NOT NULL,
    DNGPRDT          VARCHAR(500)     NOT NULL,
    RPDPCD           CHAR(10)         NOT NULL,
    REPORTER         CHAR(100)        NOT NULL,
    RPTTLNB          CHAR(50)         NOT NULL,
    RMK              VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_PRJDBINF ADD CONSTRAINT PK_REI_PRJDBINF PRIMARY KEY (DNGCD, PRJNMCD, DCLSCD, DNGHTM, DNGPST, DNGSVT, LGTD, LTTD, DNGRSAN, TRMM, DNGPRDT, RPDPCD, REPORTER, RPTTLNB, RMK);

-- 多媒体信息表
CREATE TABLE REI_MTMINF (
    MTMCD            VARCHAR(40)      NOT NULL,
    WRP              CHAR(3),
    WRPCD            VARCHAR(15),
    RPDPCD           VARCHAR(10),
    ADCD             CHAR(6),
    CLLTM            DATETIME,
    MTTPLST          TINYINT,
    TITLE            VARCHAR(60),
    FLEXT            VARCHAR(6),
    CLLCTR           VARCHAR(100),
    DSCRPTN          VARCHAR(100),
    BNFL             IMAGE,
    BNFLPTH          VARCHAR(150),
    RMK              VARCHAR(1000)
);
ALTER TABLE REI_MTMINF ADD CONSTRAINT PK_REI_MTMINF PRIMARY KEY (MTMCD);

-- 实时工情与多媒体对照表
CREATE TABLE REI_RTENIMTR (
    INFCLCD          INT              NOT NULL,
    RLTCD            VARCHAR(40)      NOT NULL,
    MTMCD            VARCHAR(40)      NOT NULL
);
ALTER TABLE REI_RTENIMTR ADD CONSTRAINT PK_REI_RTENIMTR PRIMARY KEY (INFCLCD, RLTCD, MTMCD);

-- 填报单位信息表
CREATE TABLE REI_RPDPINF (
    RPDPCD           CHAR(10)         NOT NULL,
    RPDPNM           CHAR(50)         NOT NULL,
    PCHRPDP          CHAR(50)         NOT NULL
);
ALTER TABLE REI_RPDPINF ADD CONSTRAINT PK_REI_RPDPINF PRIMARY KEY (RPDPCD, RPDPNM, PCHRPDP);

-- 堤防(段)运行状况表
CREATE TABLE REI_DKRS (
    PRJNMCD          CHAR(12)         NOT NULL,
    CLLTM            DATETIME         NOT NULL,
    HDRSTCD          CHAR(8),
    LGTD             CHAR(16),
    LTTD             CHAR(16),
    CLPSADDR         CHAR(20),
    CLPSDRN          CHAR(20),
    Z                DECIMAL(8,2),
    Q                DECIMAL(12,2),
    WSDCH            DECIMAL(4,2),
    RPDPCD           CHAR(10),
    REPORTER         CHAR(100),
    RPTTLNMB         CHAR(50),
    RMK              VARCHAR(1000)
);
ALTER TABLE REI_DKRS ADD CONSTRAINT PK_REI_DKRS PRIMARY KEY (PRJNMCD, CLLTM);

-- 水库运行状况表
CREATE TABLE REI_RSVRS (
    PRJNMCD          CHAR(20)         NOT NULL,
    CLLTM            TIME             NOT NULL,
    RSDSCLS          CHAR(1)          NOT NULL,
    Z                DECIMAL(6,2)     NOT NULL,
    STRG             DECIMAL(10,2)    NOT NULL,
    INQ              DECIMAL(10,2)    NOT NULL,
    OTQ              DECIMAL(10,2)    NOT NULL,
    RPDPCD           CHAR(10)         NOT NULL,
    REPORTER         CHAR(100)        NOT NULL,
    RPTTLNMB         CHAR(50)         NOT NULL,
    RMK              VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_RSVRS ADD CONSTRAINT PK_REI_RSVRS PRIMARY KEY (PRJNMCD, CLLTM, RSDSCLS, Z, STRG, INQ, OTQ, RPDPCD, REPORTER, RPTTLNMB, RMK);

-- 蓄滞洪区运行状况表
CREATE TABLE REI_DTBRS (
    PRJNMCD          CHAR(12)         NOT NULL,
    CLLTM            TIME             NOT NULL,
    DBCHSNMZ         DECIMAL(6,2)     NOT NULL,
    DTINQ            DECIMAL(10,2)    NOT NULL,
    DBZ              DECIMAL(6,2)     NOT NULL,
    DBV              DECIMAL(10,2)    NOT NULL,
    RLCPP            INT              NOT NULL,
    DTOUTQ           DECIMAL(10,2)    NOT NULL,
    RPDPCD           CHAR(10)         NOT NULL,
    REPORTER         CHAR(100)        NOT NULL,
    RPTTLNMB         CHAR(50)         NOT NULL,
    RMK              VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_DTBRS ADD CONSTRAINT PK_REI_DTBRS PRIMARY KEY (PRJNMCD, CLLTM, DBCHSNMZ, DTINQ, DBZ, DBV, RLCPP, DTOUTQ, RPDPCD, REPORTER, RPTTLNMB, RMK);

-- 水闸运行状况表
CREATE TABLE REI_SLCRS (
    PRJNMCD          CHAR(12)         NOT NULL,
    CLLTM            TIME             NOT NULL,
    SLUPSZ           DECIMAL(6,2)     NOT NULL,
    SLDSZ            DECIMAL(6,2)     NOT NULL,
    THRSLQ           DECIMAL(10,2)    NOT NULL,
    GTOPN            INT              NOT NULL,
    UPSWTP           CHAR(1)          NOT NULL,
    DSWTP            CHAR(1)          NOT NULL,
    RPDPCD           CHAR(10)         NOT NULL,
    REPORTER         CHAR(100)        NOT NULL,
    RPTTINMB         CHAR(50)         NOT NULL,
    RMK              VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_SLCRS ADD CONSTRAINT PK_REI_SLCRS PRIMARY KEY (PRJNMCD, CLLTM, SLUPSZ, SLDSZ, THRSLQ, GTOPN, UPSWTP, DSWTP, RPDPCD, REPORTER, RPTTINMB, RMK);

-- 治河工程运行状况表
CREATE TABLE REI_RTWRS (
    PRJNMCD          CHAR(12)         NOT NULL,
    CLLTM            TIME             NOT NULL,
    RVBK             CHAR(10)         NOT NULL,
    WTFILS           VARCHAR(1000)    NOT NULL,
    RVCHS            VARCHAR(1000)    NOT NULL,
    RPDPCD           CHAR(10)         NOT NULL,
    REPORTER         CHAR(100)        NOT NULL,
    RPTTLNMB         CHAR(50)         NOT NULL,
    RMK              VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_RTWRS ADD CONSTRAINT PK_REI_RTWRS PRIMARY KEY (PRJNMCD, CLLTM, RVBK, WTFILS, RVCHS, RPDPCD, REPORTER, RPTTLNMB, RMK);

-- 决口险情信息表
CREATE TABLE REI_BRCHINF (
    DNGCD            CHAR(18)         NOT NULL,
    CLIJTM           TIME             NOT NULL,
    BRCHWD           DECIMAL(6,2)     NOT NULL,
    BRCHVLC          DECIMAL(5,2)     NOT NULL,
    BOUTQ            DECIMAL(10,2)    NOT NULL,
    BUPSDSWH         DECIMAL(4,2)     NOT NULL,
    TRGLCD           VARCHAR(1000)    NOT NULL,
    AFFAR            VARCHAR(1000)    NOT NULL,
    OTHER            VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_BRCHINF ADD CONSTRAINT PK_REI_BRCHINF PRIMARY KEY (DNGCD, CLIJTM, BRCHWD, BRCHVLC, BOUTQ, BUPSDSWH, TRGLCD, AFFAR, OTHER);

-- 漫溢险情信息表
CREATE TABLE REI_OVFINF (
    DNGCD            CHAR(18)         NOT NULL,
    CLLTM            TIME             NOT NULL,
    OVFLNG           DECIMAL(6,2)     NOT NULL,
    OVFH             DECIMAL(4,2)     NOT NULL,
    OTHER            VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_OVFINF ADD CONSTRAINT PK_REI_OVFINF PRIMARY KEY (DNGCD, CLLTM, OVFLNG, OVFH, OTHER);

-- 管涌险情信息表
CREATE TABLE REI_PPINF (
    DNGCD            CHAR(18)         NOT NULL,
    CLLTM            TIME             NOT NULL,
    PPPSDSC          CHAR(100)        NOT NULL,
    PPDM             DECIMAL(3,2)     NOT NULL,
    PPQ              DECIMAL(6,1)     NOT NULL,
    PPFLH            DECIMAL(4,1)     NOT NULL,
    PPFLTB           CHAR(100)        NOT NULL,
    PPNMB            INT              NOT NULL,
    PPDAREA          DECIMAL(8,2)     NOT NULL,
    OTHER            VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_PPINF ADD CONSTRAINT PK_REI_PPINF PRIMARY KEY (DNGCD, CLLTM, PPPSDSC, PPDM, PPQ, PPFLH, PPFLTB, PPNMB, PPDAREA, OTHER);

-- 陷坑险情信息表
CREATE TABLE REI_PFINF (
    DNGCD            CHAR(18)         NOT NULL,
    CLLTM            DATETIME         NOT NULL,
    PFDP             DECIMAL(3,2)     NOT NULL,
    PFAREA           DECIMAL(4,2)     NOT NULL,
    OTHER            VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_PFINF ADD CONSTRAINT PK_REI_PFINF PRIMARY KEY (DNGCD, CLLTM, PFDP, PFAREA, OTHER);

-- 滑坡险情信息表
CREATE TABLE REI_LSLINF (
    DNGCD            CHAR(18)         NOT NULL,
    CLLTM            DATETIME         NOT NULL,
    LSMSLWH          DECIMAL(3,2)     NOT NULL,
    LSLLNG           DECIMAL(4,2)     NOT NULL,
    LSLVLM           DECIMAL(10,2)    NOT NULL,
    LSLANG           DECIMAL(4,2)     NOT NULL,
    OTHER            VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_LSLINF ADD CONSTRAINT PK_REI_LSLINF PRIMARY KEY (DNGCD, CLLTM, LSMSLWH, LSLLNG, LSLVLM, LSLANG, OTHER);

-- 裂缝险情信息表
CREATE TABLE REI_CCKINF (
    DNGCD            CHAR(18)         NOT NULL,
    CLLTM            DATETIME         NOT NULL,
    CCKTP            CHAR(100)        NOT NULL,
    MXCCKLNG         DECIMAL(5,2)     NOT NULL,
    MXCCKWD          DECIMAL(5,2)     NOT NULL,
    MXCCKDP          DECIMAL(5,2)     NOT NULL,
    CCKNMB           INT              NOT NULL,
    OTHER            VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_CCKINF ADD CONSTRAINT PK_REI_CCKINF PRIMARY KEY (DNGCD, CLLTM, CCKTP, MXCCKLNG, MXCCKWD, MXCCKDP, CCKNMB, OTHER);

-- 崩岸险情信息表
CREATE TABLE REI_BANKCINF (
    DNGCD            CHAR(18)         NOT NULL,
    CLLTM            TIME             NOT NULL,
    DSCKDKFT         DECIMAL(6,2)     NOT NULL,
    CLLPLNG          DECIMAL(6,2)     NOT NULL,
    CLLPWD           DECIMAL(4,2)     NOT NULL,
    CLLPVLM          DECIMAL(10,2)    NOT NULL,
    OTHER            VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_BANKCINF ADD CONSTRAINT PK_REI_BANKCINF PRIMARY KEY (DNGCD, CLLTM, DSCKDKFT, CLLPLNG, CLLPWD, CLLPVLM, OTHER);

-- 滑动险情信息表
CREATE TABLE REI_SLDINF (
    DNGCD            CHAR(18)         NOT NULL,
    CLLTM            TIME             NOT NULL,
    SLDTP            CHAR(100)        NOT NULL,
    SLDANG           DECIMAL(4,2)     NOT NULL,
    SLDDSP           DECIMAL(6,2)     NOT NULL,
    TRGLCD           VARCHAR(1000)    NOT NULL,
    OTHER            VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_SLDINF ADD CONSTRAINT PK_REI_SLDINF PRIMARY KEY (DNGCD, CLLTM, SLDTP, SLDANG, SLDDSP, TRGLCD, OTHER);

-- 闸门险情信息表
CREATE TABLE REI_GATEDMINF (
    DNGCD            CHAR(18)         NOT NULL,
    CLLTM            TIME             NOT NULL,
    SLDMDSC          VARCHAR(500)     NOT NULL,
    GTOPCWD          CHAR(100)        NOT NULL,
    THRSLQ           DECIMAL(8,2)     NOT NULL,
    OTHER            VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_GATEDMINF ADD CONSTRAINT PK_REI_GATEDMINF PRIMARY KEY (DNGCD, CLLTM, SLDMDSC, GTOPCWD, THRSLQ, OTHER);

-- 渗水险情信息表
CREATE TABLE REI_SPGINF (
    DNGCD            CHAR(18)         NOT NULL,
    CLLTM            TIME             NOT NULL,
    SPAREA           DECIMAL(8,2)     NOT NULL,
    SPQ              DECIMAL(6,4)     NOT NULL,
    OTHER            VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_SPGINF ADD CONSTRAINT PK_REI_SPGINF PRIMARY KEY (DNGCD, CLLTM, SPAREA, SPQ, OTHER);

-- 淘刷险情信息表
CREATE TABLE REI_SCRINF (
    DNGCD            CHAR(18)         NOT NULL,
    CLLTM            TIME             NOT NULL,
    DCCKDKCR         DECIMAL(5,2)     NOT NULL,
    SCRAREA          DECIMAL(8,2)     NOT NULL,
    SCRDP            DECIMAL(4,2)     NOT NULL,
    SCRLNG           DECIMAL(6,2)     NOT NULL,
    OTHER            VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_SCRINF ADD CONSTRAINT PK_REI_SCRINF PRIMARY KEY (DNGCD, CLLTM, DCCKDKCR, SCRAREA, SCRDP, SCRLNG, OTHER);

-- 溃坝险情信息表
CREATE TABLE REI_OVTINF (
    DNGCD            CHAR(18)         NOT NULL,
    CLLTM            TIME             NOT NULL,
    OVTDRC           CHAR(50)         NOT NULL,
    OVTANG           DECIMAL(4,2)     NOT NULL,
    OTHER            VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_OVTINF ADD CONSTRAINT PK_REI_OVTINF PRIMARY KEY (DNGCD, CLLTM, OVTDRC, OVTANG, OTHER);

-- 倾覆险情信息表
CREATE TABLE REI_CLLPINFQ (
    DNGCD            CHAR(18)         NOT NULL,
    CLLTM            TIME             NOT NULL,
    CLLPLNG          DECIMAL(6,2)     NOT NULL,
    CLLPAREA         DECIMAL(8,2)     NOT NULL,
    CLLPVLM          DECIMAL(10,2)    NOT NULL,
    OTHER            VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_CLLPINFQ ADD CONSTRAINT PK_REI_CLLPINFQ PRIMARY KEY (DNGCD, CLLTM, CLLPLNG, CLLPAREA, CLLPVLM, OTHER);

-- 控导工程冲毁险情信息表
CREATE TABLE REI_CTRWDMINF (
    DNGCD            CHAR(18)         NOT NULL,
    CLLTM            TIME             NOT NULL,
    DSTRVLM          DECIMAL(10,2)    NOT NULL,
    DSTRLNG          DECIMAL(6,2)     NOT NULL,
    DSTRDP           DECIMAL(4,2)     NOT NULL,
    OTHER            VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_CTRWDMINF ADD CONSTRAINT PK_REI_CTRWDMINF PRIMARY KEY (DNGCD, CLLTM, DSTRVLM, DSTRLNG, DSTRDP, OTHER);

-- 堰塞湖险情信息表
CREATE TABLE REI_BRRLKDINF (
    DNGCD            CHAR(18)         NOT NULL,
    CLLTM            TIME             NOT NULL,
    BRRPS            VARCHAR(100)     NOT NULL,
    BRRCMP           VARCHAR(1000)    NOT NULL,
    BRRHGHT          DECIMAL(5,2)     NOT NULL,
    BRRWD            DECIMAL(6,2)     NOT NULL,
    BRRLNG           DECIMAL(8,2)     NOT NULL,
    BRRVLM           DECIMAL(12,2)    NOT NULL,
    BRRLMCP          DECIMAL(12,2)    NOT NULL,
    CRRTWTVLM        DECIMAL(12,2)    NOT NULL,
    WTSFBRRCH        DECIMAL(5,2)     NOT NULL,
    QINBRR           DECIMAL(10,2)    NOT NULL,
    QOUTBRL          DECIMAL(10,2)    NOT NULL,
    AFFAR            VARCHAR(1000)    NOT NULL,
    OTHER            VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_BRRLKDINF ADD CONSTRAINT PK_REI_BRRLKDINF PRIMARY KEY (DNGCD, CLLTM, BRRPS, BRRCMP, BRRHGHT, BRRWD, BRRLNG, BRRVLM, BRRLMCP, CRRTWTVLM, WTSFBRRCH, QINBRR, QOUTBRL, AFFAR, OTHER);

-- 其他险情信息表
CREATE TABLE REI_OTHDINF (
    DNGCD            CHAR(18)         NOT NULL,
    CLLTM            TIME             NOT NULL,
    DNGNM            CHAR(20)         NOT NULL,
    DNGDSC           VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_OTHDINF ADD CONSTRAINT PK_REI_OTHDINF PRIMARY KEY (DNGCD, CLLTM, DNGNM, DNGDSC);

-- 抢险动态信息表
CREATE TABLE REI_FLFTTR (
    DNGCD            CHAR(18)         NOT NULL,
    CLLTM            DATETIME         NOT NULL,
    FLFGHST          DATETIME         NOT NULL,
    FLFRHPL          VARCHAR(1000)    NOT NULL,
    PTCPSDSC         VARCHAR(1000)    NOT NULL,
    EQPM             VARCHAR(1000)    NOT NULL,
    SPPLY            VARCHAR(1000)    NOT NULL,
    EQLFND           DECIMAL(12,2)    NOT NULL,
    CNCLSN           VARCHAR(1000)    NOT NULL,
    OTHER            VARCHAR(1000)
);
ALTER TABLE REI_FLFTTR ADD CONSTRAINT PK_REI_FLFTTR PRIMARY KEY (DNGCD, CLLTM, FLFGHST, FLFRHPL, PTCPSDSC, EQPM, SPPLY, EQLFND, CNCLSN);

-- 防汛动态信息表
CREATE TABLE REI_FLCNTN (
    NYVSNO           CHAR(18)         NOT NULL,
    TITLE            CHAR(60)         NOT NULL,
    DATE             DATE             NOT NULL,
    FLDRG            VARCHAR(500)     NOT NULL,
    FLDDFNC          VARCHAR(500)     NOT NULL,
    RLCPP            INT              NOT NULL,
    DNGOVV           VARCHAR(500)     NOT NULL,
    DSSDMG           VARCHAR(500)     NOT NULL,
    EQLFND           DECIMAL(10,2)    NOT NULL,
    OTHER            VARCHAR(1000)    NOT NULL
);
ALTER TABLE REI_FLCNTN ADD CONSTRAINT PK_REI_FLCNTN PRIMARY KEY (NYVSNO, TITLE, DATE, FLDRG, FLDDFNC, RLCPP, DNGOVV, DSSDMG, EQLFND, OTHER);

-- 测站基本属性表
CREATE TABLE ST_STBPRP_B (
    STCD             CHAR(8)          NOT NULL,
    STNM             VARCHAR(30),
    RVNM             VARCHAR(30),
    HNNM             VARCHAR(30),
    BSNM             VARCHAR(30),
    LGTD1            DECIMAL(10,6),
    LTTD1            DECIMAL(10,6),
    STLC             VARCHAR(50),
    ADDVCD           CHAR(6),
    DTMNM            VARCHAR(16),
    DTMEL            DECIMAL(7,3),
    DTPR             DECIMAL(7,3),
    STTP             CHAR(2),
    FRGRD            CHAR(1),
    ESSTYM           CHAR(6),
    BGFRYM           CHAR(6),
    ATCUNIT          VARCHAR(20),
    ADMAUTH          VARCHAR(20),
    LOCALITY         VARCHAR(20)      NOT NULL,
    STBK             CHAR(1),
    STAZT            INT,
    DSTRVM           DECIMAL(6,1),
    DRNA             INT,
    PHCD             CHAR(6),
    FIELDCAP         DECIMAL(6,2),
    USESYMB          CHAR(1),
    COMMENT          VARCHAR(200),
    MODITIME         DATETIME
);
ALTER TABLE ST_STBPRP_B ADD CONSTRAINT PK_ST_STBPRP_B PRIMARY KEY (STCD);

-- 测站报送任务表
CREATE TABLE ST_STSMTASK_B (
    STCD             CHAR(8)          NOT NULL,
    DFRTMS           INT,
    WHP              CHAR(1),
    WHE              CHAR(1),
    WHZ              CHAR(1),
    WHQ              CHAR(1),
    WHV              CHAR(1),
    WHQR             CHAR(1),
    WHDAM            CHAR(1),
    WHQO             CHAR(1),
    WHWAV            CHAR(1),
    WHS              CHAR(1),
    WHICE            CHAR(1),
    WHQP             CHAR(1),
    WHQAM            CHAR(1),
    WHQDIS           CHAR(1),
    WHSOIL           CHAR(1),
    WHXM             CHAR(1),
    OFFICER          VARCHAR(12)      NOT NULL,
    MPHONE           CHAR(11)         NOT NULL,
    SPHONE           CHAR(12)         NOT NULL,
    HPHONE           CHAR(12),
    MODITIME         DATETIME
);
ALTER TABLE ST_STSMTASK_B ADD CONSTRAINT PK_ST_STSMTASK_B PRIMARY KEY (STCD);

-- 库(湖)站关系表
CREATE TABLE ST_RSVRSTRL_B (
    STCD             CHAR(8)          NOT NULL,
    RLSTCD           CHAR(8)          NOT NULL,
    IOMRK            CHAR(1)          NOT NULL,
    MODITIME         DATETIME
);
ALTER TABLE ST_RSVRSTRL_B ADD CONSTRAINT PK_ST_RSVRSTRL_B PRIMARY KEY (STCD, RLSTCD, IOMRK);

-- 堰闸站关系表
CREATE TABLE ST_WASRL_B (
    STCD             CHAR(8)          NOT NULL,
    RLSTCD           CHAR(8)          NOT NULL,
    RLMRK            CHAR(1)          NOT NULL,
    MODITIME         DATETIME
);
ALTER TABLE ST_WASRL_B ADD CONSTRAINT PK_ST_WASRL_B PRIMARY KEY (STCD, RLSTCD, RLMRK);

-- 河道防洪指标表
CREATE TABLE ST_RVFCCH_B (
    STCD             CHAR(8)          NOT NULL,
    LDKEL            DECIMAL(7,3),
    RDKEL            DECIMAL(7,3),
    WRZ              DECIMAL(7,3),
    WRQ              DECIMAL(9,3),
    GRZ              DECIMAL(7,3),
    GRQ              DECIMAL(9,3),
    FLPQ             DECIMAL(9,3),
    OBHTZ            DECIMAL(7,3),
    OBHTZTM          DATETIME,
    IVHZ             DECIMAL(7,3),
    IVHZTM           DATETIME,
    OBMXQ            DECIMAL(9,3),
    OBMXQTM          DATETIME,
    IVMXQ            DECIMAL(9,3),
    IVMXQTM          DATETIME,
    HMXS             DECIMAL(9,3),
    HMXSTM           DATETIME,
    HMXAVV           DECIMAL(9,3),
    HMXAVVTM         DATETIME,
    HLZ              DECIMAL(7,3),
    HLZTM            DATETIME,
    HMNQ             DECIMAL(9,3),
    HMNQTM           DATETIME,
    TAZ              DECIMAL(7,3),
    TAQ              DECIMAL(9,3),
    LAZ              DECIMAL(7,3),
    LAQ              DECIMAL(9,3),
    SFZ              DECIMAL(7,3),
    SFQ              DECIMAL(9,3),
    MODITIME         DATETIME
);
ALTER TABLE ST_RVFCCH_B ADD CONSTRAINT PK_ST_RVFCCH_B PRIMARY KEY (STCD);

-- 库(湖)站防洪指标表
CREATE TABLE ST_RSVRFCCH_B (
    RSCD             VARCHAR(11)      NOT NULL,
    STCD             CHAR(8),
    DAMEL            DECIMAL(7,3),
    CKFLZ            DECIMAL(7,3),
    DSFLZ            DECIMAL(7,3),
    NORMZ            DECIMAL(7,3),
    DDZ              DECIMAL(7,3),
    ACTZ             DECIMAL(7,3),
    TTCP             DECIMAL(9,3),
    FLDCP            DECIMAL(9,3),
    ACTCP            DECIMAL(9,3),
    DDCP             DECIMAL(9,3),
    HHRZ             DECIMAL(7,3),
    HHRZTM           DATETIME,
    HMXINQ           DECIMAL(9,3),
    RSTDR            DECIMAL(5,2),
    HMXINQTM         DATETIME,
    HMXW             DECIMAL(9,3),
    HMXWTM           DATETIME,
    RHMXOTQ          DECIMAL(9,3),
    RHMXOTQTM        DATETIME,
    HLRZ             DECIMAL(7,3),
    HLRZTM           DATETIME,
    HMNINQ           DECIMAL(9,3),
    HMNINQTM         DATETIME,
    TAZ              DECIMAL(7,3),
    TAQ              DECIMAL(9,3),
    LAZ              DECIMAL(7,3),
    SFQ              DECIMAL(9,3),
    RSVRTP           CHAR(2),
    MODITIME         DATETIME
);
ALTER TABLE ST_RSVRFCCH_B ADD CONSTRAINT PK_ST_RSVRFCCH_B PRIMARY KEY (RSCD);

-- 库(湖)站汛限水位表
CREATE TABLE ST_RSVRFSR_B (
    STCD             CHAR(8)          NOT NULL,
    BGMD             CHAR(4)          NOT NULL,
    EDMD             CHAR(4),
    FSLTDZ           DECIMAL(7,3),
    FSTP             CHAR(1),
    MODITIME         DATETIME
);
ALTER TABLE ST_RSVRFSR_B ADD CONSTRAINT PK_ST_RSVRFSR_B PRIMARY KEY (STCD, BGMD);

-- 测站水文要素阈值表
CREATE TABLE ST_STCHKVAL_B (
    STCD             CHAR(8)          NOT NULL,
    DYEULT           DECIMAL(5,1),
    PULT             DECIMAL(5,1),
    PDULT            DECIMAL(5,1),
    PXULT            DECIMAL(5,1),
    PMULT            DECIMAL(5,1),
    ZULT             DECIMAL(7,3),
    ZLLT             DECIMAL(7,3),
    ZTCULT           DECIMAL(7,3),
    ZDCULT           DECIMAL(7,3),
    QULT             DECIMAL(9,3),
    QLLT             DECIMAL(9,3),
    VULT             DECIMAL(9,3),
    VLLT             DECIMAL(9,3),
    QRULT            DECIMAL(9,3),
    QOULT            DECIMAL(9,3),
    MODITIME         DATETIME
);
ALTER TABLE ST_STCHKVAL_B ADD CONSTRAINT PK_ST_STCHKVAL_B PRIMARY KEY (STCD);

-- 洪水传播时间表
CREATE TABLE ST_FSDR_B (
    UPSTCD           CHAR(8)          NOT NULL,
    DWSTCD           CHAR(8)          NOT NULL,
    RCHLEN           INT,
    SFTQ             DECIMAL(9,3),
    QMGN             INT              NOT NULL,
    MNTRTM           DECIMAL(5,2),
    MXTRTM           DECIMAL(5,2),
    AVTRTM           DECIMAL(5,2),
    MODITIME         DATETIME
);
ALTER TABLE ST_FSDR_B ADD CONSTRAINT PK_ST_FSDR_B PRIMARY KEY (UPSTCD, DWSTCD, QMGN);

-- 水位流量关系曲线表
CREATE TABLE ST_ZQRL_B (
    STCD             CHAR(8)          NOT NULL,
    LNNM             CHAR(20)         NOT NULL,
    PTNO             INT              NOT NULL,
    Z                DECIMAL(7,3)     NOT NULL,
    Q                DECIMAL(9,3)     NOT NULL,
    COMMENT          VARCHAR(500),
    MODITIME         DATETIME
);
ALTER TABLE ST_ZQRL_B ADD CONSTRAINT PK_ST_ZQRL_B PRIMARY KEY (STCD, LNNM, PTNO);

-- 库(湖)容曲线表
CREATE TABLE ST_ZVARL_B (
    STCD             CHAR(8)          NOT NULL,
    MSTM             DATETIME         NOT NULL,
    PTNO             INT              NOT NULL,
    RZ               DECIMAL(7,3)     NOT NULL,
    W                DECIMAL(9,3),
    WSFA             INT,
    MODITIME         DATETIME
);
ALTER TABLE ST_ZVARL_B ADD CONSTRAINT PK_ST_ZVARL_B PRIMARY KEY (STCD, MSTM, PTNO);

-- 水位(流量)频率分析成果表
CREATE TABLE ST_ZQFRAR_B (
    STCD             CHAR(8)          NOT NULL,
    TPCYR            INT              NOT NULL,
    RCINT            INT              NOT NULL,
    Q                DECIMAL(9,3),
    Z                DECIMAL(7,3),
    W1               DECIMAL(11,4),
    W3               DECIMAL(11,4),
    W5               DECIMAL(11,4),
    W7               DECIMAL(11,4),
    W10              DECIMAL(11,4),
    W15              DECIMAL(11,4),
    W30              DECIMAL(11,4),
    W60              DECIMAL(11,4),
    MODITIME         DATETIME
);
ALTER TABLE ST_ZQFRAR_B ADD CONSTRAINT PK_ST_ZQFRAR_B PRIMARY KEY (STCD, TPCYR, RCINT);

-- 洪水频率分析参数表
CREATE TABLE ST_FRAPAR_B (
    STCD             CHAR(8)          NOT NULL,
    TPCYR            INT              NOT NULL,
    AVRG             DECIMAL(11,4)    NOT NULL,
    VARTP            CHAR(3)          NOT NULL,
    CV               DECIMAL(5,3)     NOT NULL,
    CS               DECIMAL(5,3)     NOT NULL,
    BGYR             INT              NOT NULL,
    EDYR             INT              NOT NULL,
    SPNUM            INT              NOT NULL,
    MODITIME         DATETIME
);
ALTER TABLE ST_FRAPAR_B ADD CONSTRAINT PK_ST_FRAPAR_B PRIMARY KEY (STCD, TPCYR, VARTP);

-- 断面测验成果表
CREATE TABLE ST_RVSECT_B (
    STCD             CHAR(8)          NOT NULL,
    MSTM             DATETIME         NOT NULL,
    VTNO             CHAR(4)          NOT NULL,
    DI               DECIMAL(8,3)     NOT NULL,
    ZB               DECIMAL(8,3)     NOT NULL,
    COMMENT          VARCHAR(500),
    MODITIME         DATETIME
);
ALTER TABLE ST_RVSECT_B ADD CONSTRAINT PK_ST_RVSECT_B PRIMARY KEY (STCD, MSTM, VTNO);

-- 水信息发布单位编码表
CREATE TABLE ST_INSTCD_B (
    RLSINSTCD        CHAR(8)          NOT NULL,
    INSTNM           CHAR(40),
    LOCALITY         CHAR(20),
    MODITIME         DATETIME
);
ALTER TABLE ST_INSTCD_B ADD CONSTRAINT PK_ST_INSTCD_B PRIMARY KEY (RLSINSTCD);

-- 降水量表
CREATE TABLE ST_PPTN_R (
    STCD             CHAR(8)          NOT NULL,
    MPCD             CHAR(4)          NOT NULL,
    TM               DATETIME         NOT NULL,
    DRP              DECIMAL(5,1),
    INTV             DECIMAL(5,2),
    PDR              DECIMAL(5,2),
    DYP              DECIMAL(5,1),
    WTH              CHAR(1),
    LMT              DATETIME
);
ALTER TABLE ST_PPTN_R ADD CONSTRAINT PK_ST_PPTN_R PRIMARY KEY (STCD, MPCD, TM);

-- 降雪表
CREATE TABLE ST_SNOW_R (
    STCD             CHAR(8)          NOT NULL,
    TM               DATETIME         NOT NULL,
    SNOWDEP          INT,
    SNOWDEN          DECIMAL(3,2)
);
ALTER TABLE ST_SNOW_R ADD CONSTRAINT PK_ST_SNOW_R PRIMARY KEY (STCD, TM);

-- 冰雹表
CREATE TABLE ST_HAIL_R (
    STCD             CHAR(8)          NOT NULL,
    TM               DATETIME         NOT NULL,
    HPD              INT,
    HLDR             DECIMAL(5,2)
);
ALTER TABLE ST_HAIL_R ADD CONSTRAINT PK_ST_HAIL_R PRIMARY KEY (STCD, TM);

-- 日蒸发量表
CREATE TABLE ST_DAYEV_R (
    STCD             CHAR(8)          NOT NULL,
    TM               DATETIME         NOT NULL,
    EPTP             CHAR(1),
    DYE              DECIMAL(5,1)     NOT NULL
);
ALTER TABLE ST_DAYEV_R ADD CONSTRAINT PK_ST_DAYEV_R PRIMARY KEY (STCD, TM);

-- 河道水情表
CREATE TABLE ST_RIVER_R (
    STCD             CHAR(8)          NOT NULL,
    TM               DATETIME         NOT NULL,
    Z                DECIMAL(7,3),
    Q                DECIMAL(9,3),
    XSA              DECIMAL(9,3),
    XSAVV            DECIMAL(5,3),
    XSMXV            DECIMAL(5,3),
    FLWCHRCD         CHAR(1),
    WPTN             CHAR(1),
    MSQMT            CHAR(1),
    MSAMT            CHAR(1),
    MSVMT            CHAR(1)
);
ALTER TABLE ST_RIVER_R ADD CONSTRAINT PK_ST_RIVER_R PRIMARY KEY (STCD, TM);

-- 水库水情表
CREATE TABLE ST_RSVR_R (
    STCD             CHAR(8)          NOT NULL,
    MPCD             CHAR(4)          NOT NULL,
    TM               DATETIME         NOT NULL,
    RZ               DECIMAL(7,3),
    INQ              DECIMAL(9,3),
    W                DECIMAL(9,3),
    OTQ              DECIMAL(9,3),
    RWCHRCD          CHAR(1),
    RWPTN            CHAR(1),
    INQDR            DECIMAL(5,2),
    MSQMT            CHAR(1),
    LMT              DATETIME
);
ALTER TABLE ST_RSVR_R ADD CONSTRAINT PK_ST_RSVR_R PRIMARY KEY (STCD, MPCD, TM);

-- 堰闸水情表
CREATE TABLE ST_WAS_R (
    STCD             CHAR(8)          NOT NULL,
    TM               DATETIME         NOT NULL,
    UPZ              DECIMAL(7,3),
    DWZ              DECIMAL(7,3),
    TGTQ             DECIMAL(9,3),
    SWCHRCD          CHAR(1),
    SUPWPTN          CHAR(1),
    SDWWPTN          CHAR(1),
    MSQMT            CHAR(1)
);
ALTER TABLE ST_WAS_R ADD CONSTRAINT PK_ST_WAS_R PRIMARY KEY (STCD, TM);

-- 闸门启闭情况表
CREATE TABLE ST_GATE_R (
    STCD             CHAR(8)          NOT NULL,
    TM               DATETIME         NOT NULL,
    EXKEY            CHAR(1)          NOT NULL,
    EQPTP            CHAR(2),
    EQPNO            CHAR(2),
    GTOPNUM          INT,
    GTOPHGT          DECIMAL(5,2),
    GTQ              DECIMAL(9,3),
    MSQMT            CHAR(1)
);
ALTER TABLE ST_GATE_R ADD CONSTRAINT PK_ST_GATE_R PRIMARY KEY (STCD, TM, EXKEY);

-- 泵站水情表
CREATE TABLE ST_PUMP_R (
    STCD             CHAR(8)          NOT NULL,
    TM               DATETIME         NOT NULL,
    PPUPZ            DECIMAL(7,3),
    PPDWZ            DECIMAL(7,3),
    OMCN             INT,
    OMPWR            INT,
    PMPQ             DECIMAL(7,3),
    PPWCHRCD         CHAR(1),
    PPUPWPTN         CHAR(1),
    PPDWWPTN         CHAR(1),
    MSQMT            CHAR(1),
    PDCHCD           CHAR(1)
);
ALTER TABLE ST_PUMP_R ADD CONSTRAINT PK_ST_PUMP_R PRIMARY KEY (STCD, TM);

-- 潮汐水情表
CREATE TABLE ST_TIDE_R (
    STCD             CHAR(8)          NOT NULL,
    TM               DATETIME         NOT NULL,
    TDZ              DECIMAL(7,3),
    AIRP             INT,
    TDCHRCD          CHAR(1),
    TDPTN            CHAR(1),
    HLTDMK           CHAR(1)
);
ALTER TABLE ST_TIDE_R ADD CONSTRAINT PK_ST_TIDE_R PRIMARY KEY (STCD, TM);

-- 风浪信息表
CREATE TABLE ST_WDWV_R (
    STCD             CHAR(8)          NOT NULL,
    TM               DATETIME         NOT NULL,
    WNDPWR           INT,
    WNDV             DECIMAL(4,1),
    WNDDIR           CHAR(2),
    WVHGT            INT
);
ALTER TABLE ST_WDWV_R ADD CONSTRAINT PK_ST_WDWV_R PRIMARY KEY (STCD, TM);

-- 含沙量表
CREATE TABLE ST_SED_R (
    STCD             CHAR(8)          NOT NULL,
    TM               DATETIME         NOT NULL,
    S                DECIMAL(9,3),
    SCHRCD           CHAR(1),
    SMT              CHAR(1)
);
ALTER TABLE ST_SED_R ADD CONSTRAINT PK_ST_SED_R PRIMARY KEY (STCD, TM);

-- 气温水温表
CREATE TABLE ST_TMP_R (
    STCD             CHAR(8)          NOT NULL,
    TM               DATETIME         NOT NULL,
    ATMP             DECIMAL(3,1),
    WTMP             DECIMAL(3,1)
);
ALTER TABLE ST_TMP_R ADD CONSTRAINT PK_ST_TMP_R PRIMARY KEY (STCD, TM);

-- 定性冰情表
CREATE TABLE ST_QLICEINF_R (
    STCD             CHAR(8)          NOT NULL,
    TM               DATETIME         NOT NULL,
    EXKEY            CHAR(1)          NOT NULL,
    QLTICD           CHAR(2),
    RLPSTN           CHAR(4),
    RLDSTN           DECIMAL(3,1),
    QLTITHK          DECIMAL(4,1),
    IOSNDP           INT,
    IUDFSTHK         INT
);
ALTER TABLE ST_QLICEINF_R ADD CONSTRAINT PK_ST_QLICEINF_R PRIMARY KEY (STCD, TM, EXKEY);

-- 定量冰情表
CREATE TABLE ST_QTICEINF_R (
    STCD             CHAR(8)          NOT NULL,
    TM               DATETIME         NOT NULL,
    EXKEY            CHAR(1)          NOT NULL,
    QNTICD           CHAR(1),
    RLPSTN           CHAR(4),
    RLDSTN           DECIMAL(3,1),
    LBDIWD           INT,
    RBDIWD           INT,
    BDITHK           DECIMAL(4,1),
    IRCON            INT,
    DITHK            DECIMAL(4,1),
    MXIA             INT,
    MXIV             DECIMAL(3,1),
    IQ               DECIMAL(9,3),
    FRZPROP          CHAR(1),
    BRKPROP          CHAR(1),
    DIPCK            INT,
    IDAMGRW          CHAR(1),
    IDAMHGT          DECIMAL(3,1),
    IDAMWD           DECIMAL(7,3),
    IDAMUPZ          DECIMAL(7,3),
    IDAMUPWPTN       CHAR(1),
    ELTY             CHAR(1),
    IQPROP           CHAR(1)
);
ALTER TABLE ST_QTICEINF_R ADD CONSTRAINT PK_ST_QTICEINF_R PRIMARY KEY (STCD, TM, EXKEY);

-- 土壤墒情表
CREATE TABLE ST_SOIL_R (
    STCD             CHAR(8)          NOT NULL,
    TM               DATETIME         NOT NULL,
    EXKEY            CHAR(1)          NOT NULL,
    VTAVSLM          DECIMAL(4,1),
    SRLSLM           DECIMAL(4,1),
    SLM10            DECIMAL(4,1),
    SLM20            DECIMAL(4,1),
    SLM30            DECIMAL(4,1),
    SLM40            DECIMAL(4,1),
    SLM50            DECIMAL(4,1),
    SLM60            DECIMAL(4,1),
    CRPTY            CHAR(1),
    CRPGRWPRD        CHAR(1),
    HITRSN           CHAR(1),
    HITEXT           CHAR(1),
    SLTP             CHAR(1),
    SLPQ             CHAR(2),
    DRSLD            INT,
    IRRINTV          INT,
    PINTV            INT,
    SLMMMT           CHAR(1)
);
ALTER TABLE ST_SOIL_R ADD CONSTRAINT PK_ST_SOIL_R PRIMARY KEY (STCD, TM, EXKEY);

-- 特殊水情表
CREATE TABLE ST_SPEC_R (
    STCD             CHAR(8)          NOT NULL,
    TM               DATETIME         NOT NULL,
    TPCD             CHAR(2)          NOT NULL,
    PSTNCD           CHAR(2),
    RLDSTN           DECIMAL(3,1),
    DEPTH            DECIMAL(4,2),
    HEIGHT           DECIMAL(4,2),
    WIDTH            DECIMAL(5,1),
    Q                DECIMAL(9,3),
    MSQMT            CHAR(1),
    RSVRTP           CHAR(1)
);
ALTER TABLE ST_SPEC_R ADD CONSTRAINT PK_ST_SPEC_R PRIMARY KEY (STCD, TM, TPCD);

-- 暴雨加报表
CREATE TABLE ST_STORM_R (
    STCD             CHAR(8)          NOT NULL,
    TM               DATETIME         NOT NULL,
    STRMDR           DECIMAL(5,2),
    STRMP            DECIMAL(4,1),
    WTH              CHAR(1)
);
ALTER TABLE ST_STORM_R ADD CONSTRAINT PK_ST_STORM_R PRIMARY KEY (STCD, TM);

-- 堰闸(泵)站时段均值表
CREATE TABLE ST_WSPAVSD_R (
    STCD             CHAR(8)          NOT NULL,
    IDTM             DATETIME         NOT NULL,
    STTDR            DECIMAL(5,2),
    DRAVZ            DECIMAL(7,3),
    DRAVQ            DECIMAL(9,3),
    DRPW             DECIMAL(11,3),
    DRDW             DECIMAL(11,3)
);
ALTER TABLE ST_WSPAVSD_R ADD CONSTRAINT PK_ST_WSPAVSD_R PRIMARY KEY (STCD, IDTM);

-- 河道水情多日均值表
CREATE TABLE ST_RVAV_R (
    STCD             CHAR(8)          NOT NULL,
    IDTM             DATETIME         NOT NULL,
    STTDRCD          CHAR(1)          NOT NULL,
    AVZ              DECIMAL(7,3),
    AVQ              DECIMAL(9,3)
);
ALTER TABLE ST_RVAV_R ADD CONSTRAINT PK_ST_RVAV_R PRIMARY KEY (STCD, IDTM, STTDRCD);

-- 水库水情多日均值表
CREATE TABLE ST_RSVRAV_R (
    STCD             CHAR(8)          NOT NULL,
    IDTM             DATETIME         NOT NULL,
    STTDRCD          CHAR(1)          NOT NULL,
    AVINQ            DECIMAL(9,3),
    AVOTQ            DECIMAL(9,3)
);
ALTER TABLE ST_RSVRAV_R ADD CONSTRAINT PK_ST_RSVRAV_R PRIMARY KEY (STCD, IDTM, STTDRCD);

-- 堰闸水情多日均值表
CREATE TABLE ST_WASAV_R (
    STCD             CHAR(8)          NOT NULL,
    IDTM             DATETIME         NOT NULL,
    STTDRCD          CHAR(1)          NOT NULL,
    AVUPZ            DECIMAL(7,3),
    AVDWZ            DECIMAL(7,3),
    AVGTQ            DECIMAL(9,3)
);
ALTER TABLE ST_WASAV_R ADD CONSTRAINT PK_ST_WASAV_R PRIMARY KEY (STCD, IDTM, STTDRCD);

-- 潮汐水情多日均值表
CREATE TABLE ST_TIDEAV_R (
    STCD             CHAR(8)          NOT NULL,
    IDTM             DATETIME         NOT NULL,
    STTDRCD          CHAR(1)          NOT NULL,
    AVHTDZ           DECIMAL(7,3),
    AVLTDZ           DECIMAL(7,3)
);
ALTER TABLE ST_TIDEAV_R ADD CONSTRAINT PK_ST_TIDEAV_R PRIMARY KEY (STCD, IDTM, STTDRCD);

-- 气温水温多日均值表
CREATE TABLE ST_TMPAV_R (
    STCD             CHAR(8)          NOT NULL,
    IDTM             DATETIME         NOT NULL,
    STTDRCD          CHAR(1)          NOT NULL,
    AVATMP           DECIMAL(3,1),
    AVWTMP           DECIMAL(3,1)
);
ALTER TABLE ST_TMPAV_R ADD CONSTRAINT PK_ST_TMPAV_R PRIMARY KEY (STCD, IDTM, STTDRCD);

-- 蒸发量统计表
CREATE TABLE ST_ESTAT_R (
    STCD             CHAR(8)          NOT NULL,
    IDTM             DATETIME         NOT NULL,
    STTDRCD          CHAR(1)          NOT NULL,
    ACCE             DECIMAL(6,1)
);
ALTER TABLE ST_ESTAT_R ADD CONSTRAINT PK_ST_ESTAT_R PRIMARY KEY (STCD, IDTM, STTDRCD);

-- 降水量统计表
CREATE TABLE ST_PSTAT_R (
    STCD             CHAR(8)          NOT NULL,
    IDTM             DATETIME         NOT NULL,
    STTDRCD          CHAR(1)          NOT NULL,
    ACCP             DECIMAL(6,1)
);
ALTER TABLE ST_PSTAT_R ADD CONSTRAINT PK_ST_PSTAT_R PRIMARY KEY (STCD, IDTM, STTDRCD);

-- 引排水量统计表
CREATE TABLE ST_WDPSTAT_R (
    STCD             CHAR(8)          NOT NULL,
    IDTM             DATETIME         NOT NULL,
    STTDRCD          CHAR(1)          NOT NULL,
    PPTMS            INT,
    ACCPW            DECIMAL(11,3),
    PPHRS            DECIMAL(6,2),
    DRNTMS           INT,
    ACCDW            DECIMAL(11,3),
    DRNHRS           DECIMAL(6,2)
);
ALTER TABLE ST_WDPSTAT_R ADD CONSTRAINT PK_ST_WDPSTAT_R PRIMARY KEY (STCD, IDTM, STTDRCD);

-- 输沙输水总量表
CREATE TABLE ST_SEDRF_R (
    STCD             CHAR(8)          NOT NULL,
    IDTM             DATETIME         NOT NULL,
    STTDRCD          CHAR(1)          NOT NULL,
    WRNF             DECIMAL(11,3),
    STW              DECIMAL(11,3)
);
ALTER TABLE ST_SEDRF_R ADD CONSTRAINT PK_ST_SEDRF_R PRIMARY KEY (STCD, IDTM, STTDRCD);

-- 河道水情极值表
CREATE TABLE ST_RVEVS_R (
    STCD             CHAR(8)          NOT NULL,
    IDTM             DATETIME         NOT NULL,
    STTDRCD          CHAR(1)          NOT NULL,
    HTZ              DECIMAL(7,3),
    LTZ              DECIMAL(7,3),
    MXQ              DECIMAL(9,3),
    MNQ              DECIMAL(9,3),
    HTZTM            DATETIME,
    LTZTM            DATETIME,
    MXQTM            DATETIME,
    MNQTM            DATETIME
);
ALTER TABLE ST_RVEVS_R ADD CONSTRAINT PK_ST_RVEVS_R PRIMARY KEY (STCD, IDTM, STTDRCD);

-- 水库水情极值表
CREATE TABLE ST_RSVREVS_R (
    STCD             CHAR(8)          NOT NULL,
    IDTM             DATETIME         NOT NULL,
    STTDRCD          CHAR(1)          NOT NULL,
    HTRZ             DECIMAL(7,3),
    LTRZ             DECIMAL(7,3),
    MXINQ            DECIMAL(9,3),
    MNINQ            DECIMAL(9,3),
    MXOTQ            DECIMAL(9,3),
    MNOTQ            DECIMAL(9,3),
    MXW              DECIMAL(9,3),
    MNW              DECIMAL(9,3),
    HTRZTM           DATETIME,
    LTRZTM           DATETIME,
    MXINQTM          DATETIME,
    MNINQTM          DATETIME,
    MXOTQTM          DATETIME,
    MNOTQTM          DATETIME,
    MXWTM            DATETIME,
    MNWTM            DATETIME
);
ALTER TABLE ST_RSVREVS_R ADD CONSTRAINT PK_ST_RSVREVS_R PRIMARY KEY (STCD, IDTM, STTDRCD);

-- 堰闸水情极值表
CREATE TABLE ST_WASEVS_R (
    STCD             CHAR(8)          NOT NULL,
    IDTM             DATETIME         NOT NULL,
    STTDRCD          CHAR(1)          NOT NULL,
    HTUPZ            DECIMAL(7,3),
    LTUPZ            DECIMAL(7,3),
    MXGTQ            DECIMAL(9,3),
    MNGTQ            DECIMAL(9,3),
    HTDWZ            DECIMAL(7,3),
    LTDWZ            DECIMAL(7,3),
    HTUPZTM          DATETIME,
    LTUPZTM          DATETIME,
    MXGTQTM          DATETIME,
    MNGTQTM          DATETIME,
    HTDWZTM          DATETIME,
    LTDWZTM          DATETIME
);
ALTER TABLE ST_WASEVS_R ADD CONSTRAINT PK_ST_WASEVS_R PRIMARY KEY (STCD, IDTM, STTDRCD);

-- 泵站水情极值表
CREATE TABLE ST_PMEVS_R (
    STCD             CHAR(8)          NOT NULL,
    IDTM             DATETIME         NOT NULL,
    STTDRCD          CHAR(1)          NOT NULL,
    PPUPHTZ          DECIMAL(7,3),
    PPUPLTZ          DECIMAL(7,3),
    PPDWHTZ          DECIMAL(7,3),
    PPDWLTZ          DECIMAL(7,3),
    MXPPQ            DECIMAL(9,3),
    MNPPQ            DECIMAL(9,3),
    MXDNQ            DECIMAL(9,3),
    MNDNQ            DECIMAL(9,3),
    PPUPHTZTM        DATETIME,
    PPUPLTZTM        DATETIME,
    PPDWHTZTM        DATETIME,
    PPDWLTZTM        DATETIME,
    MXPPQTM          DATETIME,
    MNPPQTM          DATETIME,
    MXDNQTM          DATETIME,
    MNDNQTM          DATETIME
);
ALTER TABLE ST_PMEVS_R ADD CONSTRAINT PK_ST_PMEVS_R PRIMARY KEY (STCD, IDTM, STTDRCD);

-- 潮汐水情极值表
CREATE TABLE ST_TIDEEVS_R (
    STCD             CHAR(8)          NOT NULL,
    IDTM             DATETIME         NOT NULL,
    STTDRCD          CHAR(1)          NOT NULL,
    HTTDZ            DECIMAL(7,3),
    LTTDZ            DECIMAL(7,3),
    MXWNDV           DECIMAL(4,1),
    HTTDZTM          DATETIME,
    LTTDZTM          DATETIME,
    MXWNDVTM         DATETIME
);
ALTER TABLE ST_TIDEEVS_R ADD CONSTRAINT PK_ST_TIDEEVS_R PRIMARY KEY (STCD, IDTM, STTDRCD);

-- 气温水温极值表
CREATE TABLE ST_TMPEVS_R (
    STCD             CHAR(8)          NOT NULL,
    IDTM             DATETIME         NOT NULL,
    STTDRCD          CHAR(1)          NOT NULL,
    MXATMP           DECIMAL(3,1),
    MNATMP           DECIMAL(3,1),
    MXWTMP           DECIMAL(3,1),
    MNWTMP           DECIMAL(3,1),
    MXATMPTM         DATETIME,
    MNATMPTM         DATETIME,
    MXWTMPTM         DATETIME,
    MNWTMPTM         DATETIME
);
ALTER TABLE ST_TMPEVS_R ADD CONSTRAINT PK_ST_TMPEVS_R PRIMARY KEY (STCD, IDTM, STTDRCD);

-- 水情预报成果注释表
CREATE TABLE ST_FORECASTC_F (
    STCD             CHAR(8)          NOT NULL,
    UNITNAME         VARCHAR(20)      NOT NULL,
    PLCD             VARCHAR(20)      NOT NULL,
    FYMDH            DATETIME         NOT NULL,
    IYMDH            DATETIME         NOT NULL,
    WNSTATUS         CHAR(1),
    COMMENTS         VARCHAR(200)
);
ALTER TABLE ST_FORECASTC_F ADD CONSTRAINT PK_ST_FORECASTC_F PRIMARY KEY (STCD, UNITNAME, PLCD, FYMDH, IYMDH);

-- 河道(水库入库)水情预报成果表
CREATE TABLE ST_RIVERS_F (
    STCD             CHAR(8)          NOT NULL,
    UNITNAME         VARCHAR(20)      NOT NULL,
    PLCD             VARCHAR(20)      NOT NULL,
    FYMDH            DATETIME         NOT NULL,
    IYMDH            DATETIME         NOT NULL,
    YMDH             DATETIME         NOT NULL,
    Z                DECIMAL(7,3),
    Q                DECIMAL(9,3)
);
ALTER TABLE ST_RIVERS_F ADD CONSTRAINT PK_ST_RIVERS_F PRIMARY KEY (STCD, UNITNAME, PLCD, FYMDH, IYMDH, YMDH);

-- 水库调度成果表
CREATE TABLE ST_RSVRC_F (
    STCD             CHAR(8)          NOT NULL,
    UNITNAME         VARCHAR(20)      NOT NULL,
    PLCD             VARCHAR(20)      NOT NULL,
    FYMDH            DATETIME         NOT NULL,
    IYMDH            DATETIME         NOT NULL,
    YMDH             DATETIME         NOT NULL,
    Z                DECIMAL(7,3),
    W                DECIMAL(9,3),
    OTQ              DECIMAL(9,3)
);
ALTER TABLE ST_RSVRC_F ADD CONSTRAINT PK_ST_RSVRC_F PRIMARY KEY (STCD, UNITNAME, PLCD, FYMDH, IYMDH, YMDH);

-- 风暴潮预报成果表
CREATE TABLE ST_TIDEC_F (
    STCD             CHAR(8)          NOT NULL,
    UNITNAME         VARCHAR(20)      NOT NULL,
    FYMDH            DATETIME         NOT NULL,
    IYMDH            DATETIME         NOT NULL,
    YMDH             DATETIME         NOT NULL,
    TDZ              DECIMAL(7,3),
    STRMSRG          DECIMAL(7,3)
);
ALTER TABLE ST_TIDEC_F ADD CONSTRAINT PK_ST_TIDEC_F PRIMARY KEY (STCD, UNITNAME, FYMDH, IYMDH, YMDH);

-- 天文潮预报成果表
CREATE TABLE ST_ASTROTD_F (
    STCD             CHAR(8)          NOT NULL,
    UNITNAME         VARCHAR(20)      NOT NULL,
    IYMDH            DATETIME         NOT NULL,
    YMDH             DATETIME         NOT NULL,
    TDZ              DECIMAL(7,3)
);
ALTER TABLE ST_ASTROTD_F ADD CONSTRAINT PK_ST_ASTROTD_F PRIMARY KEY (STCD, UNITNAME, IYMDH, YMDH);

-- 多年同期日降水量表
CREATE TABLE ST_PDDAYMYAV_S (
    STCD             CHAR(8)          NOT NULL,
    MNTH             INT              NOT NULL,
    DAY              INT              NOT NULL,
    MYAVP            DECIMAL(5,1),
    BGYR             INT,
    EDYR             INT,
    STTYRNUM         INT,
    COMMENT          VARCHAR(200),
    MODITIME         DATETIME
);
ALTER TABLE ST_PDDAYMYAV_S ADD CONSTRAINT PK_ST_PDDAYMYAV_S PRIMARY KEY (STCD, MNTH, DAY);

-- 多年同期旬月降水量表
CREATE TABLE ST_PDMMYAV_S (
    STCD             CHAR(8)          NOT NULL,
    MNTH             INT              NOT NULL,
    PRDTP            INT              NOT NULL,
    MYAVP            DECIMAL(5,1),
    PMAX             DECIMAL(5,1),
    TPMAX            INT,
    PMIN             DECIMAL(5,1),
    TPMIN            INT,
    BGYR             INT,
    EDYR             INT,
    STTYRNUM         INT,
    COMMENT          VARCHAR(200),
    MODITIME         DATETIME
);
ALTER TABLE ST_PDMMYAV_S ADD CONSTRAINT PK_ST_PDMMYAV_S PRIMARY KEY (STCD, MNTH, PRDTP);

-- 多年同期年降水量表
CREATE TABLE ST_PDYYMYAV_S (
    STCD             CHAR(8)          NOT NULL,
    YYAVP            DECIMAL(5,1),
    PMAX             DECIMAL(5,1),
    TPMAX            INT,
    PMIN             DECIMAL(5,1),
    TPMIN            INT,
    BGYR             INT,
    EDYR             INT,
    STTYRNUM         INT,
    COMMENT          VARCHAR(200),
    MODITIME         DATETIME
);
ALTER TABLE ST_PDYYMYAV_S ADD CONSTRAINT PK_ST_PDYYMYAV_S PRIMARY KEY (STCD);

-- 多年同期日平均水位流量表
CREATE TABLE ST_RVDAYMYAV_S (
    STCD             CHAR(8)          NOT NULL,
    MNTH             INT              NOT NULL,
    DAY              INT              NOT NULL,
    MYAVZ            DECIMAL(7,3),
    MYAVQ            DECIMAL(9,3),
    BGYR             INT,
    EDYR             INT,
    STTYRNUM         INT,
    COMMENT          VARCHAR(200),
    MODITIME         DATETIME
);
ALTER TABLE ST_RVDAYMYAV_S ADD CONSTRAINT PK_ST_RVDAYMYAV_S PRIMARY KEY (STCD, MNTH, DAY);

-- 多年同期旬月平均水位流量表
CREATE TABLE ST_RVDMMYAV_S (
    STCD             CHAR(8)          NOT NULL,
    MNTH             INT              NOT NULL,
    PRDTP            INT              NOT NULL,
    MYAVZ            DECIMAL(7,3),
    MYAVQ            DECIMAL(9,3),
    BGYR             INT,
    EDYR             INT,
    STTYRNUM         INT,
    COMMENT          VARCHAR(200),
    MODITIME         DATETIME
);
ALTER TABLE ST_RVDMMYAV_S ADD CONSTRAINT PK_ST_RVDMMYAV_S PRIMARY KEY (STCD, MNTH, PRDTP);

-- 多年同期库(湖)蓄水量均值表
CREATE TABLE ST_RSVRMYAV_S (
    STCD             CHAR(8)          NOT NULL,
    MNTH             INT              NOT NULL,
    DAY              INT              NOT NULL,
    MYRAVW           DECIMAL(9,3),
    BGYR             INT,
    EDYR             INT,
    STTYRNUM         INT,
    COMMENT          VARCHAR(200),
    MODITIME         DATETIME
);
ALTER TABLE ST_RSVRMYAV_S ADD CONSTRAINT PK_ST_RSVRMYAV_S PRIMARY KEY (STCD, MNTH, DAY);

-- 多年同期旬月水位流量极值表
CREATE TABLE ST_RVMMEVS_S (
    STCD             CHAR(8)          NOT NULL,
    YR               INT              NOT NULL,
    MNTH             INT              NOT NULL,
    PRDTP            INT              NOT NULL,
    HTZ              DECIMAL(7,3),
    HTZTM            DATETIME,
    MXQ              DECIMAL(9,3),
    MXQTM            DATETIME,
    LTZ              DECIMAL(7,3),
    LTZTM            DATETIME,
    MNQ              DECIMAL(9,3),
    MNQTM            DATETIME,
    MODITIME         DATETIME
);
ALTER TABLE ST_RVMMEVS_S ADD CONSTRAINT PK_ST_RVMMEVS_S PRIMARY KEY (STCD, YR, MNTH, PRDTP);

-- 多年水位流量年极值表
CREATE TABLE ST_RVYEVS_S (
    STCD             CHAR(8)          NOT NULL,
    YY               INT              NOT NULL,
    HTZ              DECIMAL(7,3),
    HTZTM            DATETIME,
    MXQ              DECIMAL(9,3),
    MXQTM            DATETIME,
    LTZ              DECIMAL(7,3),
    LTZTM            DATETIME,
    MNQ              DECIMAL(9,3),
    MNQTM            DATETIME,
    MODITIME         DATETIME
);
ALTER TABLE ST_RVYEVS_S ADD CONSTRAINT PK_ST_RVYEVS_S PRIMARY KEY (STCD, YY);

-- 交换单位信息表
CREATE TABLE ST_INSTCD_E (
    RLSINSTCD        CHAR(8)          NOT NULL,
    INSTNM           CHAR(40)         NOT NULL,
    EXCTYPE          CHAR(1)          NOT NULL,
    EXCIP            VARCHAR(15)      NOT NULL,
    EXCPORT          INT              NOT NULL,
    EXCSRV           VARCHAR(32)      NOT NULL,
    WEBURL           VARCHAR(255),
    PASSWORD         VARCHAR(32),
    ISSTARTS         CHAR(1)          NOT NULL,
    MODITIME         DATETIME         NOT NULL
);
ALTER TABLE ST_INSTCD_E ADD CONSTRAINT PK_ST_INSTCD_E PRIMARY KEY (EXCTYPE, EXCIP);

-- 交换站点信息表
CREATE TABLE ST_STCD_E (
    RLSINSTCD        CHAR(8)          NOT NULL,
    STCD             CHAR(8)          NOT NULL,
    MODITIME         DATETIME         NOT NULL
);

-- 交换表单信息表
CREATE TABLE ST_TABLE_E (
    RLSINSTCD        CHAR(8)          NOT NULL,
    TABID            VARCHAR(30)      NOT NULL,
    ISSTARTS         CHAR(1)          NOT NULL,
    MODITIME         DATETIME         NOT NULL
);

-- 待发送信息记录表
CREATE TABLE ST_SENDWAIT_E (
    SLSH             BIGINT           NOT NULL,
    STCD             CHAR(8)          NOT NULL,
    TABID            VARCHAR(30)      NOT NULL,
    TM               DATETIME         NOT NULL,
    EXCKEY           VARCHAR(200)     NOT NULL,
    OPERATION        CHAR(1)          NOT NULL,
    EXCINF           TEXT             NOT NULL,
    POLLSTATUS       CHAR(1)          NOT NULL,
    MODITIME         DATETIME         NOT NULL
);
ALTER TABLE ST_SENDWAIT_E ADD CONSTRAINT PK_ST_SENDWAIT_E PRIMARY KEY (STCD, TABID, TM, POLLSTATUS);

-- 已处理信息记录表
CREATE TABLE ST_SENDDO_E (
    SLSH             BIGINT           NOT NULL,
    STCD             CHAR(8)          NOT NULL,
    TABID            VARCHAR(30)      NOT NULL,
    TM               DATETIME,
    EXCKEY           VARCHAR(200)     NOT NULL,
    OPERATION        CHAR(1)          NOT NULL,
    EXCINF           TEXT             NOT NULL,
    MODITIME         DATETIME         NOT NULL
);
ALTER TABLE ST_SENDDO_E ADD CONSTRAINT PK_ST_SENDDO_E PRIMARY KEY (STCD);

-- 发送文件信息表
CREATE TABLE ST_SENDFILE_E (
    SFNUM            BIGINT           NOT NULL,
    RLSINSTCD        CHAR(8)          NOT NULL,
    SENDTYPE         CHAR(1)          NOT NULL,
    SENDSTATUS       CHAR(1)          NOT NULL,
    SFILENAME        VARCHAR(32)      NOT NULL,
    SENDTM           DATETIME,
    SENDCOUNT        INT,
    ERRLINE          INT,
    MODITIME         DATETIME         NOT NULL
);
ALTER TABLE ST_SENDFILE_E ADD CONSTRAINT PK_ST_SENDFILE_E PRIMARY KEY (RLSINSTCD, SENDTYPE, SENDSTATUS, MODITIME);

-- 信息配发记录表
CREATE TABLE ST_SENDTO_E (
    RLSINSTCD        CHAR(8)          NOT NULL,
    SLSH             BIGINT           NOT NULL,
    TM               DATETIME,
    SENDSTATUS       CHAR(1)          NOT NULL,
    SFNUM            BIGINT           NOT NULL,
    MODITIME         DATETIME         NOT NULL
);
ALTER TABLE ST_SENDTO_E ADD CONSTRAINT PK_ST_SENDTO_E PRIMARY KEY (RLSINSTCD, SLSH, SENDSTATUS, SFNUM, MODITIME);

-- 信息配发记录表
CREATE TABLE ST_RECVFILE_E (
    RFNUM            BIGINT           NOT NULL,
    RLSINSTCD        CHAR(8)          NOT NULL,
    RECVTYPE         CHAR(1)          NOT NULL,
    RECVSTATUS       CHAR(1)          NOT NULL,
    RFILENAME        VARCHAR(200)     NOT NULL,
    RECVTM           DATETIME         NOT NULL,
    MODITIME         DATETIME         NOT NULL
);
ALTER TABLE ST_RECVFILE_E ADD CONSTRAINT PK_ST_RECVFILE_E PRIMARY KEY (RLSINSTCD, RECVTYPE, RECVSTATUS, MODITIME);

-- 接收信息记录表
CREATE TABLE ST_RECVINF_E (
    RLSH             BIGINT           NOT NULL,
    RFNUM            BIGINT           NOT NULL,
    RLSINSTCD        CHAR(8)          NOT NULL,
    SLSH             BIGINT           NOT NULL,
    STCD             VARCHAR(8)       NOT NULL,
    TABID            VARCHAR(30)      NOT NULL,
    TM               DATETIME         NOT NULL,
    EXCKEY           VARCHAR(200)     NOT NULL,
    OPERATION        CHAR(1)          NOT NULL,
    EXCINF           TEXT             NOT NULL,
    INSTOSTATUS      CHAR(1)          NOT NULL,
    INSTOTM          DATETIME,
    ERRINF           VARCHAR(512),
    MANUALTM         DATETIME,
    MODITIME         DATETIME         NOT NULL
);
ALTER TABLE ST_RECVINF_E ADD CONSTRAINT PK_ST_RECVINF_E PRIMARY KEY (RFNUM, RLSINSTCD, STCD, INSTOSTATUS, MODITIME);

-- 系统配置信息表
CREATE TABLE ST_SYNCSET_E (
    SYSNAME          VARCHAR(32)      NOT NULL,
    SYSVALUE         VARCHAR(200)     NOT NULL
);

-- 系统日志表
CREATE TABLE ST_SYSLOG_E (
    LOGLSH           BIGINT           NOT NULL,
    LOGTYPE          CHAR(1)          NOT NULL,
    LOGCONTENT       VARCHAR(512)     NOT NULL,
    MODITIME         DATETIME         NOT NULL
);

-- 模式对象信息表
CREATE TABLE ST_DBOBJECT_D (
    SONAME           CHAR(20)         NOT NULL,
    XTYPE            CHAR(2)          NOT NULL,
    DESCRIPTION      CHAR(255),
    SCRIPT           CHAR(255),
    IPARA            CHAR(255),
    OPARA            CHAR(255),
    LASTNAME         CHAR(6),
    MODITIME         DATETIME
);
ALTER TABLE ST_DBOBJECT_D ADD CONSTRAINT PK_ST_DBOBJECT_D PRIMARY KEY (SONAME, XTYPE);

-- 表属性信息表
CREATE TABLE ST_TABLE_D (
    TABID            VARCHAR(20)      NOT NULL,
    TBNO             CHAR(3)          NOT NULL,
    TBNMCN           VARCHAR(30)      NOT NULL,
    TBNMEN           VARCHAR(50),
    EXCHANGE         CHAR(1)          NOT NULL,
    MODITIME         DATETIME
);
ALTER TABLE ST_TABLE_D ADD CONSTRAINT PK_ST_TABLE_D PRIMARY KEY (TABID);

-- 字段属性信息表
CREATE TABLE ST_FIELD_D (
    TABID            VARCHAR(20)      NOT NULL,
    FLID             VARCHAR(20)      NOT NULL,
    FLSID            INT              NOT NULL,
    FLNMCN           VARCHAR(30)      NOT NULL,
    FLNMEN           VARCHAR(255),
    FLTL             VARCHAR(20),
    NLAT             CHAR(2),
    UNNM             VARCHAR(30),
    FCHSC            VARCHAR(20),
    PKAT             CHAR(2),
    INATT            INT,
    MODITIME         DATETIME
);
ALTER TABLE ST_FIELD_D ADD CONSTRAINT PK_ST_FIELD_D PRIMARY KEY (TABID, FLID);

-- 内码与自然语言对照表
CREATE TABLE ST_DBICANL_D (
    TABID            VARCHAR(200)     NOT NULL,
    FLID             VARCHAR(100)     NOT NULL,
    RSB              VARCHAR(200)     NOT NULL,
    ASCIICD          VARCHAR(200)     NOT NULL,
    MODITIME         DATETIME
);
ALTER TABLE ST_DBICANL_D ADD CONSTRAINT PK_ST_DBICANL_D PRIMARY KEY (TABID, FLID, RSB);

-- 行政区域代码表
CREATE TABLE ST_ADDVCD_D (
    ADDVCD           CHAR(6)          NOT NULL,
    ADDVNM           VARCHAR(24)      NOT NULL,
    COMMENT          VARCHAR(200),
    MODITIME         DATETIME
);
ALTER TABLE ST_ADDVCD_D ADD CONSTRAINT PK_ST_ADDVCD_D PRIMARY KEY (ADDVCD);

-- 流域水系代码表
CREATE TABLE ST_ENNMCD_D (
    ENNMCD           CHAR(12)         NOT NULL,
    BSNM             VARCHAR(30)      NOT NULL,
    COMMENT          VARCHAR(200),
    MODITIME         DATETIME
);
ALTER TABLE ST_ENNMCD_D ADD CONSTRAINT PK_ST_ENNMCD_D PRIMARY KEY (ENNMCD);

-- 工程信息表字段定义
CREATE TABLE T_PROJINFO (
    IID              INT              NOT NULL,
    XPROPERTY        TEXT             NOT NULL
);
ALTER TABLE T_PROJINFO ADD CONSTRAINT PK_T_PROJINFO PRIMARY KEY (IID);

-- 测点基本资料表字段定义
CREATE TABLE T_MEASPOINT (
    POINTID          VARCHAR(6)       NOT NULL,
    DCODE            VARCHAR(50)      NOT NULL,
    SENSORID         VARCHAR(16),
    BUILDINGID       BIGINT,
    STCD             CHAR(8)          NOT NULL,
    WRP              CHAR(3),
    WRPCD            VARCHAR(12),
    WRPBLD           VARCHAR(13),
    WRPBLDCD         VARCHAR(15),
    CRSC             CHAR(8),
    MPNM             VARCHAR(20),
    MNRITM           VARCHAR(3)       NOT NULL,
    MANUFACTUREID    VARCHAR(12),
    SENSORALIAS      VARCHAR(50),
    SDATE            DATETIME,
    DATYPE           TINYINT          NOT NULL,
    RUNSTATE         TINYINT          NOT NULL,
    IMPORTANCE       TINYINT,
    MSMT             VARCHAR(4),
    XPROPERTY        TEXT             NOT NULL
);
ALTER TABLE T_MEASPOINT ADD CONSTRAINT PK_T_MEASPOINT PRIMARY KEY (POINTID, STCD, MNRITM);

-- 断面基本资料表
CREATE TABLE SWS_T_SECTION (
    WRP              CHAR(3)          NOT NULL,
    WRPCD            VARCHAR(12)      NOT NULL,
    WRPBLD           VARCHAR(4)       NOT NULL,
    WRPBLDCD         VARCHAR(14)      NOT NULL,
    CRSC             CHAR(8)          NOT NULL,
    CRSCNM           VARCHAR(100),
    CRSCTP           CHAR(1),
    PTH              VARCHAR(200),
    FL               IMAGE,
    XPROPERTY        TEXT
);
ALTER TABLE SWS_T_SECTION ADD CONSTRAINT PK_SWS_T_SECTION PRIMARY KEY (WRP, WRPCD, WRPBLD, WRPBLDCD, CRSC);

-- 仪器类型表字段定义
CREATE TABLE T_SENSOR (
    IID              VARCHAR(16)      NOT NULL,
    ICLASS           VARCHAR(50)      NOT NULL,
    INAME            VARCHAR(50)      NOT NULL,
    FORMULA          VARCHAR(100),
    XPROPERTY        TEXT
);
ALTER TABLE T_SENSOR ADD CONSTRAINT PK_T_SENSOR PRIMARY KEY (IID);

-- 巡视检查项目表字段定义
CREATE TABLE T_INSPECTITEM (
    IID              INT              NOT NULL,
    INAME            VARCHAR(50)      NOT NULL,
    CRITICALGV       TINYINT          NOT NULL,
    XGRADEDEF        TEXT             NOT NULL
);
ALTER TABLE T_INSPECTITEM ADD CONSTRAINT PK_T_INSPECTITEM PRIMARY KEY (IID);

-- 建筑物拓扑表字段定义
CREATE TABLE T_BUILDING (
    IID              INT              NOT NULL,
    IPATH            VARCHAR(255)     NOT NULL,
    XPROPERTY        TEXT
);
ALTER TABLE T_BUILDING ADD CONSTRAINT PK_T_BUILDING PRIMARY KEY (IID);

-- 仪器生产厂家表字段定义
CREATE TABLE T_MANUFACTURES (
    IID              VARCHAR(12)      NOT NULL,
    INAME            VARCHAR(50)      NOT NULL,
    XPROPERTY        TEXT
);
ALTER TABLE T_MANUFACTURES ADD CONSTRAINT PK_T_MANUFACTURES PRIMARY KEY (IID);

-- 测量数据表字段定义
CREATE TABLE T_DATAMEAS (
    STCD             CHAR(8)          NOT NULL,
    POINTID          VARCHAR(6)       NOT NULL,
    DT               DATETIME         NOT NULL,
    V1               DECIMAL(20,8),
    V2               DECIMAL(20,8),
    V3               DECIMAL(20,8),
    MR1              DECIMAL(20,8),
    MR2              DECIMAL(20,8),
    MR3              DECIMAL(20,8),
    R1               DECIMAL(20,8),
    R2               DECIMAL(20,8),
    R3               DECIMAL(20,8),
    EVID1            INT,
    EVID2            INT,
    EVID3            INT,
    VPROP            TINYINT,
    LMT              DATETIME
);
ALTER TABLE T_DATAMEAS ADD CONSTRAINT PK_T_DATAMEAS PRIMARY KEY (STCD, POINTID, DT);

-- 巡视检查记录表字段定义
CREATE TABLE T_DATAINSPECT (
    IID              BIGINT           NOT NULL,
    ITEMID           INT              NOT NULL,
    DT               DATETIME         NOT NULL,
    JCONCLUSION      TINYINT          NOT NULL,
    NOTE             VARCHAR(50)      NOT NULL,
    INSPECTMAN       VARCHAR(50)      NOT NULL,
    XATTACH          TEXT
);
ALTER TABLE T_DATAINSPECT ADD CONSTRAINT PK_T_DATAINSPECT PRIMARY KEY (IID);

-- 工程文档目录表字段定义
CREATE TABLE T_DOCDIR (
    IID              INT              NOT NULL,
    IPATH            VARCHAR(255)     NOT NULL
);
ALTER TABLE T_DOCDIR ADD CONSTRAINT PK_T_DOCDIR PRIMARY KEY (IID);

-- 工程文档表字段定义
CREATE TABLE T_DOCUMENT (
    IID              INT              NOT NULL,
    DIRID            INT              NOT NULL,
    INAME            VARCHAR(50)      NOT NULL,
    XDATA            TEXT
);
ALTER TABLE T_DOCUMENT ADD CONSTRAINT PK_T_DOCUMENT PRIMARY KEY (IID);

-- 事件记录表字段定义
CREATE TABLE T_DATAEVENT (
    IID              BIGINT           NOT NULL,
    DT               DATETIME         NOT NULL,
    REFTARGET        VARCHAR(50)      NOT NULL,
    REFID            BIGINT           NOT NULL,
    BRIEF            VARCHAR(100)     NOT NULL,
    XDETAIL          TEXT,
    PERSISTENT       TINYINT          NOT NULL
);
ALTER TABLE T_DATAEVENT ADD CONSTRAINT PK_T_DATAEVENT PRIMARY KEY (IID);

-- 水厂基本信息表
CREATE TABLE WR_WFCTINF_B (
    WFCTCD           VARCHAR(10),
    WFCTNM           VARCHAR(30),
    ADDRESS          VARCHAR(100),
    LGTD             DECIMAL(12, 9),
    LTTD             DECIMAL(12, 9),
    VOLUME           DECIMAL(6, 2),
    COPACITY         DECIMAL(10, 3),
    OUTLTP           VARCHAR(8),
    OUTLTV           VARCHAR(9),
    INLTP            VARCHAR(10),
    INLTV            VARCHAR(11),
    RAWPMPN          TINYINT,
    PUMPN            TINYINT,
    PUMPH            DECIMAL(5,2),
    PUMPQ            DECIMAL(9,3),
    WSOBJ            VARCHAR(20),
    WSPOP            DECIMAL(6,2),
    CRPRT            VARCHAR(20),
    LNK              VARCHAR(100),
    DFLCD            VARCHAR(15),
    FWMSUR           VARCHAR(100),
    ADAG             VARCHAR(100),
    NT               VARCHAR(1000)
);

-- 水利工程测站关系表
CREATE TABLE SWS_WRP_STCD (
    WRPCD            VARCHAR(12)      NOT NULL,
    WRP              CHAR(3)          NOT NULL,
    STCD             VARCHAR(16)      NOT NULL,
    LMT              DATETIME
);
ALTER TABLE SWS_WRP_STCD ADD CONSTRAINT PK_SWS_WRP_STCD PRIMARY KEY (WRPCD, WRP, STCD);

-- 巡检标准模板表
CREATE TABLE SWS_INSP_TPL (
    WRP              CHAR(3)          NOT NULL,
    PRTCD            VARCHAR(15)      NOT NULL,
    ITMCD            VARCHAR(15)      NOT NULL,
    ISSTD            CHAR(1),
    TP               CHAR(2)          NOT NULL,
    ORD              SMALLINT
);
ALTER TABLE SWS_INSP_TPL ADD CONSTRAINT PK_SWS_INSP_TPL PRIMARY KEY (WRP, PRTCD, ITMCD, TP);

-- 水利工程巡检计划表
CREATE TABLE SWS_INSP_PRG (
    CD               VARCHAR(15)      NOT NULL,
    NM               VARCHAR(40),
    WRP              CHAR(3),
    WRPCD            VARCHAR(12),
    TP               CHAR(1),
    CTM              DATETIME,
    CUSR             VARCHAR(20),
    STS              CHAR(1),
    LMT              DATETIME         NOT NULL
);
ALTER TABLE SWS_INSP_PRG ADD CONSTRAINT PK_SWS_INSP_PRG PRIMARY KEY (CD);

-- 具体水利工程巡检项目实例表
CREATE TABLE SWS_INSP_INST (
    PRGCD            VARCHAR(20)      NOT NULL,
    SUBPRGNM         VARCHAR(20),
    WRPBLDTP         CHAR(3),
    WRPBLDCD         VARCHAR(14),
    PRTCD            VARCHAR(6)       NOT NULL,
    ITMCD            VARCHAR(12),
    ORD              SMALLINT,
    SGN              CHAR(1),
    LNG              DECIMAL(15,12),
    LAT              DECIMAL(15,12)
);
ALTER TABLE SWS_INSP_INST ADD CONSTRAINT PK_SWS_INSP_INST PRIMARY KEY (PRGCD, PRTCD);

-- 具体水利工程巡检计划频次表
CREATE TABLE SWS_INSP_PRG_FREQ (
    PRGCD            VARCHAR(15)      NOT NULL,
    STMON            SMALLINT         NOT NULL,
    STDAY            TINYINT          NOT NULL,
    ENMON            SMALLINT         NOT NULL,
    ENDAY            TINYINT          NOT NULL,
    CNT              TINYINT          NOT NULL,
    BAS              TINYINT          NOT NULL,
    PRD              CHAR(1)          NOT NULL
);

-- 巡检部位项目表
CREATE TABLE SWS_INSP_PRT (
    WRP              CHAR(3)          NOT NULL,
    PRTCD            VARCHAR(6)       NOT NULL,
    PPRTCD           VARCHAR(15),
    PRTNM            VARCHAR(50),
    PRTFN            VARCHAR(100),
    INSBL            CHAR(1),
    ORD              SMALLINT
);
ALTER TABLE SWS_INSP_PRT ADD CONSTRAINT PK_SWS_INSP_PRT PRIMARY KEY (WRP, PRTCD);

-- 巡检检查项目表
CREATE TABLE SWS_INSP_ITM (
    WRP              CHAR(3)          NOT NULL,
    ITMCD            VARCHAR(12)      NOT NULL,
    PRTCD            VARCHAR(15),
    ITMNM            VARCHAR(60),
    CNTT             VARCHAR(400),
    CNLSEX           VARCHAR(100),
    ORD              SMALLINT
);
ALTER TABLE SWS_INSP_ITM ADD CONSTRAINT PK_SWS_INSP_ITM PRIMARY KEY (WRP, ITMCD);

-- 巡检检查记录表
CREATE TABLE SWS_INSP_REC (
    CD               VARCHAR(40)      NOT NULL,
    WRPCD            VARCHAR(12),
    WRP              CHAR(3),
    PRTCD            VARCHAR(6),
    ITMCD            VARCHAR(12),
    RLT              CHAR(1),
    RVW              CHAR(1),
    RPT              CHAR(1),
    CNLS             VARCHAR(2000),
    CTM              DATETIME,
    USRCD            VARCHAR(20),
    USRNM            VARCHAR(20)
);
ALTER TABLE SWS_INSP_REC ADD CONSTRAINT PK_SWS_INSP_REC PRIMARY KEY (CD);

-- 巡检出勤记录表
CREATE TABLE SWS_INSP_ATT (
    DT               DATE             NOT NULL,
    IDX              INTEGER          NOT NULL,
    WRP              CHAR(3)          NOT NULL,
    WRPCD            VARCHAR(15)      NOT NULL,
    PRGCD            VARCHAR(20),
    SUBPRGNM         VARCHAR(100),
    TP               CHAR(1),
    USRCD            VARCHAR(20),
    USRNM            VARCHAR(20),
    RST              TINYINT,
    RSS              TEXT
);
ALTER TABLE SWS_INSP_ATT ADD CONSTRAINT PK_SWS_INSP_ATT PRIMARY KEY (DT, IDX, WRP, WRPCD);

-- 水利工程巡检对应表
CREATE TABLE SWS_INSP_WRP (
    WRPCD            VARCHAR(12)      NOT NULL,
    WRP              CHAR(3)          NOT NULL,
    MCD              VARCHAR(64),
    PHN              VARCHAR(15),
    V1               BIGINT
);
ALTER TABLE SWS_INSP_WRP ADD CONSTRAINT PK_SWS_INSP_WRP PRIMARY KEY (WRPCD, WRP);

-- 巡检问题记录表
CREATE TABLE SWS_INSP_ISS (
    RCD              VARCHAR(40),
    WRP              CHAR(3)          NOT NULL,
    WRPCD            VARCHAR(15)      NOT NULL,
    PRTCD            VARCHAR(6),
    OPTM             DATETIME         NOT NULL,
    RSLVTM           DATETIME,
    STS              CHAR(1)          NOT NULL,
    LVL              TINYINT,
    DESCR            VARCHAR(1000),
    LMT              DATETIME
);

-- 巡检问题跟踪处理表
CREATE TABLE SWS_INSP_ISS_TRK (
    RCD              VARCHAR(40)      NOT NULL,
    FTM              DATETIME         NOT NULL,
    DESCR            VARCHAR(400),
    USRCD            VARCHAR(20),
    USRNM            VARCHAR(20),
    STS              CHAR(1)
);
ALTER TABLE SWS_INSP_ISS_TRK ADD CONSTRAINT PK_SWS_INSP_ISS_TRK PRIMARY KEY (RCD, FTM);

-- 巡检问题项目对应表
CREATE TABLE SWS_INSP_ISS_ITM (
    RCD              VARCHAR(40),
    ITMCD            VARCHAR(12)
);

-- 巡检足迹跟踪表
CREATE TABLE SWS_INSP_TRC (
    WRP              CHAR(3),
    WRPCD            VARCHAR(15),
    IDX              TINYINT,
    TM               DATETIME,
    LNG              DECIMAL(12,8),
    LAT              DECIMAL(12,8),
    BDLNG            DECIMAL(12,8),
    BDLAT            DECIMAL(12,8),
    USRCD            VARCHAR(20),
    USRNM            VARCHAR(20)
);

-- 巡检仪相关数据后台更新记录表
CREATE TABLE SWS_INSP_MCH_UPT (
    WRP              CHAR(3)          NOT NULL,
    WRPCD            VARCHAR(15)      NOT NULL,
    LMT              DATETIME
);
ALTER TABLE SWS_INSP_MCH_UPT ADD CONSTRAINT PK_SWS_INSP_MCH_UPT PRIMARY KEY (WRP, WRPCD);

-- 巡检部位1.0适配表
CREATE TABLE SWS_INSP_PRT_X (
    ID               BIGINT           NOT NULL,
    CD               VARCHAR(15)
);
ALTER TABLE SWS_INSP_PRT_X ADD CONSTRAINT PK_SWS_INSP_PRT_X PRIMARY KEY (ID);

-- 巡检项目1.0适配表
CREATE TABLE SWS_INSP_ITM_X (
    ID               BIGINT           NOT NULL,
    CD               VARCHAR(15)
);
ALTER TABLE SWS_INSP_ITM_X ADD CONSTRAINT PK_SWS_INSP_ITM_X PRIMARY KEY (ID);

-- 自动监测实时数据表
CREATE TABLE SWS_SUM_R (
    WRPCD            VARCHAR(15),
    WRP              CHAR(3),
    RZ               DECIMAL(8,3),
    DYP              DECIMAL(5,2),
    W                DECIMAL(10,2),
    RZTM             DATETIME,
    DYPTM            DATETIME
);

-- 字典表
CREATE TABLE SWS_DATA_DICT (
    CD               VARCHAR(8)       NOT NULL,
    NM               VARCHAR(100),
    FLD              VARCHAR(20)      NOT NULL,
    WRP              CHAR(3)          NOT NULL,
    ORD              TINYINT,
    NOTE             VARCHAR(200)
);
ALTER TABLE SWS_DATA_DICT ADD CONSTRAINT PK_SWS_DATA_DICT PRIMARY KEY (CD, FLD, WRP);

-- 元数据表
CREATE TABLE SWS_DATA_META (
    TBLNM            VARCHAR(50)      NOT NULL,
    TBLTXT           VARCHAR(50),
    TBLTP            CHAR(1),
    COLNM            VARCHAR(30)      NOT NULL,
    COLTXT           VARCHAR(50),
    PRI              TINYINT,
    SYS              CHAR(1),
    DTTP             VARCHAR(20),
    UNT              VARCHAR(20),
    DFLT             VARCHAR(40),
    RFEXPR           VARCHAR(1000),
    RFTP             CHAR(1),
    NLL              CHAR(1),
    SRCH             CHAR(1),
    NOTE             VARCHAR(400)
);
ALTER TABLE SWS_DATA_META ADD CONSTRAINT PK_SWS_DATA_META PRIMARY KEY (TBLNM, COLNM);

-- 地区表
CREATE TABLE SWS_DATA_ADDV (
    CD               VARCHAR(12)      NOT NULL,
    NM               VARCHAR(100),
    ALS              VARCHAR(20)
);
ALTER TABLE SWS_DATA_ADDV ADD CONSTRAINT PK_SWS_DATA_ADDV PRIMARY KEY (CD);

-- 系统功能表
CREATE TABLE SWS_SYS_FN (
    CD               VARCHAR(16)      NOT NULL,
    NM               VARCHAR(40),
    PCD              VARCHAR(16),
    URL              VARCHAR(100),
    ICN              VARCHAR(40),
    ORD              TINYINT,
    STS              CHAR(1),
    PGFN             CHAR(1)
);
ALTER TABLE SWS_SYS_FN ADD CONSTRAINT PK_SWS_SYS_FN PRIMARY KEY (CD);

-- 系统用户表
CREATE TABLE SWS_SYS_USR (
    CD               VARCHAR(13)      NOT NULL,
    ACCNM            VARCHAR(20),
    PWD              VARCHAR(40),
    USRNM            VARCHAR(40),
    ADDVCD           VARCHAR(12),
    EMPCD            VARCHAR(13),
    ORGNM            VARCHAR(40),
    LMT              DATETIME,
    TP               CHAR(1),
    STS              CHAR(1)
);
ALTER TABLE SWS_SYS_USR ADD CONSTRAINT PK_SWS_SYS_USR PRIMARY KEY (CD);

-- 系统用户角色表
CREATE TABLE SWS_SYS_USRRLE (
    USRCD            VARCHAR(13)      NOT NULL,
    RLECD            VARCHAR(4)       NOT NULL,
    LMT              DATETIME
);
ALTER TABLE SWS_SYS_USRRLE ADD CONSTRAINT PK_SWS_SYS_USRRLE PRIMARY KEY (USRCD, RLECD);

-- 系统职员表
CREATE TABLE SWS_SYS_EMP (
    CD               VARCHAR(13),
    NM               VARCHAR(30),
    ORGCD            VARCHAR(15),
    ORGNM            VARCHAR(50),
    GNDR             CHAR(1),
    MBL              VARCHAR(13),
    STS              CHAR(1)
);

-- 系统角色表
CREATE TABLE SWS_SYS_RLE (
    CD               VARCHAR(4),
    NM               VARCHAR(20),
    ORD              SMALLINT,
    STS              CHAR(1),
    LMT              DATETIME
);

-- 系统角色功能表
CREATE TABLE SWS_SYS_RLEFN (
    RLECD            VARCHAR(12),
    FNCD             VARCHAR(12),
    LMT              DATETIME
);

-- 系统角色实体表
CREATE TABLE SWS_SYS_RLEPRVENT (
    RLECD            VARCHAR(12),
    PRVENTCD         VARCHAR(4),
    LMT              DATETIME
);

-- 用户功能表
CREATE TABLE SWS_SYS_USRFN (
    USRCD            VARCHAR(16)      NOT NULL,
    FNCD             VARCHAR(13)      NOT NULL,
    LMT              DATETIME,
    NT               VARCHAR(200)
);
ALTER TABLE SWS_SYS_USRFN ADD CONSTRAINT PK_SWS_SYS_USRFN PRIMARY KEY (USRCD, FNCD);

-- 用户水利工程表
CREATE TABLE SWS_SYS_USRWRP (
    WRP              CHAR(3),
    WRPCD            VARCHAR(12),
    USRCD            VARCHAR(13),
    LMT              DATETIME
);

-- 实体权限表
CREATE TABLE SWS_SYS_PRVENT (
    CD               VARCHAR(4)       NOT NULL,
    DESCR            VARCHAR(200),
    SQLTPL           VARCHAR(1000)
);
ALTER TABLE SWS_SYS_PRVENT ADD CONSTRAINT PK_SWS_SYS_PRVENT PRIMARY KEY (CD);

-- 用户实体权限表
CREATE TABLE SWS_SYS_USRPRVENT (
    USRCD            VARCHAR(13)      NOT NULL,
    PRVENTCD         VARCHAR(4)       NOT NULL,
    SQL              VARCHAR(1000),
    LMT              DATETIME
);
ALTER TABLE SWS_SYS_USRPRVENT ADD CONSTRAINT PK_SWS_SYS_USRPRVENT PRIMARY KEY (USRCD, PRVENTCD);

-- 水位监测数据整编表
CREATE TABLE SWS_ST_RSVR_P (
    STCD             CHAR(8)          NOT NULL,
    MPCD             CHAR(4)          NOT NULL,
    TM               DATETIME         NOT NULL,
    RZ               DECIMAL(7,3),
    INQ              DECIMAL(9,3),
    W                DECIMAL(9,3),
    OTQ              DECIMAL(9,3),
    RWCHRCD          CHAR(1),
    RWPTN            CHAR(1),
    INQDR            DECIMAL(5,2),
    MSQMT            CHAR(1),
    LMT              DATETIME
);
ALTER TABLE SWS_ST_RSVR_P ADD CONSTRAINT PK_SWS_ST_RSVR_P PRIMARY KEY (STCD, MPCD, TM);

-- 雨量监测数据整编表
CREATE TABLE SWS_ST_PPTN_P (
    STCD             CHAR(8)          NOT NULL,
    MPCD             CHAR(4)          NOT NULL,
    TM               DATETIME         NOT NULL,
    DRP              DECIMAL(5,1),
    INTV             DECIMAL(5,2),
    PDR              DECIMAL(5,2),
    DYP              DECIMAL(5,1),
    WTH              CHAR(1),
    LMT              DATETIME
);
ALTER TABLE SWS_ST_PPTN_P ADD CONSTRAINT PK_SWS_ST_PPTN_P PRIMARY KEY (STCD, MPCD, TM);

-- 图片监测数据实时表
CREATE TABLE SWS_ST_IMG_R (
    STCD             VARCHAR(16)      NOT NULL,
    MPCD             CHAR(4)          NOT NULL,
    TM               DATETIME         NOT NULL,
    BNFL             IMAGE,
    FLPTH            VARCHAR(100),
    LMT              DATETIME
);
ALTER TABLE SWS_ST_IMG_R ADD CONSTRAINT PK_SWS_ST_IMG_R PRIMARY KEY (STCD, MPCD, TM);

-- 坝体渗压监测数据整编表
CREATE TABLE SWS_ST_SPB_P (
    STCD             VARCHAR(16)      NOT NULL,
    MPCD             VARCHAR(6)       NOT NULL,
    TM               DATETIME         NOT NULL,
    V1               DECIMAL(20,8),
    V2               DECIMAL(20,8),
    V3               DECIMAL(20,8),
    R1               DECIMAL(20,8),
    R2               DECIMAL(20,8),
    R3               DECIMAL(20,8),
    LMT              DATETIME
);
ALTER TABLE SWS_ST_SPB_P ADD CONSTRAINT PK_SWS_ST_SPB_P PRIMARY KEY (STCD, MPCD, TM);

-- 坝基渗压监测数据整编表
CREATE TABLE SWS_ST_SPF_P (
    STCD             VARCHAR(16)      NOT NULL,
    MPCD             VARCHAR(6)       NOT NULL,
    TM               DATETIME         NOT NULL,
    V1               DECIMAL(20,8),
    V2               DECIMAL(20,8),
    V3               DECIMAL(20,8),
    R1               DECIMAL(20,8),
    R2               DECIMAL(20,8),
    R3               DECIMAL(20,8),
    LMT              DATETIME
);
ALTER TABLE SWS_ST_SPF_P ADD CONSTRAINT PK_SWS_ST_SPF_P PRIMARY KEY (STCD, MPCD, TM);

-- 基岩渗压监测数据整编表
CREATE TABLE SWS_ST_SPR_P (
    STCD             VARCHAR(16)      NOT NULL,
    MPCD             VARCHAR(6)       NOT NULL,
    TM               DATETIME         NOT NULL,
    V1               DECIMAL(20,8),
    V2               DECIMAL(20,8),
    V3               DECIMAL(20,8),
    R1               DECIMAL(20,8),
    R2               DECIMAL(20,8),
    R3               DECIMAL(20,8),
    LMT              DATETIME
);
ALTER TABLE SWS_ST_SPR_P ADD CONSTRAINT PK_SWS_ST_SPR_P PRIMARY KEY (STCD, MPCD, TM);

-- 绕坝渗流监测数据整编表
CREATE TABLE SWS_ST_SPU_P (
    STCD             VARCHAR(16)      NOT NULL,
    MPCD             VARCHAR(6)       NOT NULL,
    TM               DATETIME         NOT NULL,
    V1               DECIMAL(20,8),
    V2               DECIMAL(20,8),
    V3               DECIMAL(20,8),
    R1               DECIMAL(20,8),
    R2               DECIMAL(20,8),
    R3               DECIMAL(20,8),
    LMT              DATETIME
);
ALTER TABLE SWS_ST_SPU_P ADD CONSTRAINT PK_SWS_ST_SPU_P PRIMARY KEY (STCD, MPCD, TM);

-- 坝体渗流量监测数据整编表
CREATE TABLE SWS_ST_SFB_P (
    STCD             VARCHAR(16)      NOT NULL,
    MPCD             VARCHAR(6)       NOT NULL,
    TM               DATETIME         NOT NULL,
    V1               DECIMAL(20,8),
    V2               DECIMAL(20,8),
    V3               DECIMAL(20,8),
    R1               DECIMAL(20,8),
    R2               DECIMAL(20,8),
    R3               DECIMAL(20,8),
    LMT              DATETIME
);
ALTER TABLE SWS_ST_SFB_P ADD CONSTRAINT PK_SWS_ST_SFB_P PRIMARY KEY (STCD, MPCD, TM);

-- 位移监测数据整编表
CREATE TABLE SWS_ST_DP_P (
    STCD             VARCHAR(16)      NOT NULL,
    MPCD             VARCHAR(6)       NOT NULL,
    TM               DATETIME         NOT NULL,
    V1               DECIMAL(20,8),
    V2               DECIMAL(20,8),
    V3               DECIMAL(20,8),
    R1               DECIMAL(20,8),
    R2               DECIMAL(20,8),
    R3               DECIMAL(20,8),
    LMT              DATETIME
);
ALTER TABLE SWS_ST_DP_P ADD CONSTRAINT PK_SWS_ST_DP_P PRIMARY KEY (STCD, MPCD, TM);

-- 心墙位错监测数据整编表
CREATE TABLE SWS_ST_DLW_P (
    STCD             VARCHAR(16)      NOT NULL,
    MPCD             VARCHAR(6)       NOT NULL,
    TM               DATETIME         NOT NULL,
    V1               DECIMAL(20,8),
    V2               DECIMAL(20,8),
    V3               DECIMAL(20,8),
    R1               DECIMAL(20,8),
    R2               DECIMAL(20,8),
    R3               DECIMAL(20,8),
    LMT              DATETIME
);
ALTER TABLE SWS_ST_DLW_P ADD CONSTRAINT PK_SWS_ST_DLW_P PRIMARY KEY (STCD, MPCD, TM);

-- 心墙温度监测数据整编表
CREATE TABLE SWS_ST_TMW_P (
    STCD             VARCHAR(16)      NOT NULL,
    MPCD             VARCHAR(6)       NOT NULL,
    TM               DATETIME         NOT NULL,
    V1               DECIMAL(20,8),
    V2               DECIMAL(20,8),
    V3               DECIMAL(20,8),
    R1               DECIMAL(20,8),
    R2               DECIMAL(20,8),
    R3               DECIMAL(20,8),
    LMT              DATETIME
);
ALTER TABLE SWS_ST_TMW_P ADD CONSTRAINT PK_SWS_ST_TMW_P PRIMARY KEY (STCD, MPCD, TM);

-- 心墙倾斜监测数据整编表
CREATE TABLE SWS_ST_ICW_P (
    STCD             VARCHAR(16)      NOT NULL,
    MPCD             VARCHAR(6)       NOT NULL,
    TM               DATETIME         NOT NULL,
    V1               DECIMAL(20,8),
    V2               DECIMAL(20,8),
    V3               DECIMAL(20,8),
    R1               DECIMAL(20,8),
    R2               DECIMAL(20,8),
    R3               DECIMAL(20,8),
    LMT              DATETIME
);
ALTER TABLE SWS_ST_ICW_P ADD CONSTRAINT PK_SWS_ST_ICW_P PRIMARY KEY (STCD, MPCD, TM);

-- 水利工程初始值记录表
CREATE TABLE SWS_T_DATAMEAS_INIT (
    WRP              CHAR(3)          NOT NULL,
    WRPCD            VARCHAR(16)      NOT NULL,
    MPCD             VARCHAR(6)       NOT NULL,
    INITV1           DECIMAL(20,8),
    INITV2           DECIMAL(20,8),
    INITV3           DECIMAL(20,8),
    INITR1           DECIMAL(20,8),
    INITR2           DECIMAL(20,8),
    INITR3           DECIMAL(20,8),
    BLDEL            DECIMAL(10,3),
    STSNM            VARCHAR(40),
    STSDT            DATE             NOT NULL,
    STS              CHAR(1),
    INIT修改时间改时间      DATETIME
);
ALTER TABLE SWS_T_DATAMEAS_INIT ADD CONSTRAINT PK_SWS_T_DATAMEAS_INIT PRIMARY KEY (WRP, WRPCD, MPCD, STSDT);

-- 水库调度运行方案表
CREATE TABLE SWS_WRP_RSR_DSPSCH (
    RSCD             VARCHAR(11)      NOT NULL,
    RLDT             DATE             NOT NULL,
    VLDDT            DATE             NOT NULL,
    CHCMD            VARCHAR(20),
    CHCMDTEL         VARCHAR(15),
    EXST             CHAR(1),
    DSPT             IMAGE,
    DSPTPTH          VARCHAR(400),
    DSPTFLTP         VARCHAR(20),
    DTUPDT           DATETIME         NOT NULL,
    APDP             VARCHAR(50),
    APNM             VARCHAR(60),
    APDT             DATE
);
ALTER TABLE SWS_WRP_RSR_DSPSCH ADD CONSTRAINT PK_SWS_WRP_RSR_DSPSCH PRIMARY KEY (RSCD, RLDT, DTUPDT);

-- 知识库通用内容表
CREATE TABLE SWS_KB_GNL (
    CD               VARCHAR(30)      NOT NULL,
    TAGS             VARCHAR(100),
    PUBDT            DATETIME,
    AHR              VARCHAR(20),
    TTL              VARCHAR(100)     NOT NULL,
    CNTT             TEXT             NOT NULL,
    SRC              VARCHAR(200),
    STT              CHAR(1),
    TP               VARCHAR(10)      NOT NULL,
    TPNM             VARCHAR(20)      NOT NULL
);
ALTER TABLE SWS_KB_GNL ADD CONSTRAINT PK_SWS_KB_GNL PRIMARY KEY (CD);

-- 知识类别表
CREATE TABLE SWS_KB_CAT (
    CD               CHAR(4)          NOT NULL,
    PCD              CHAR(4),
    NAME             VARCHAR(40)
);
ALTER TABLE SWS_KB_CAT ADD CONSTRAINT PK_SWS_KB_CAT PRIMARY KEY (CD);

-- 知识内容类别对应
CREATE TABLE SWS_KB_GNLCAT (
    GNLCD            VARCHAR(16)      NOT NULL,
    CATCD            CHAR(4)          NOT NULL
);
ALTER TABLE SWS_KB_GNLCAT ADD CONSTRAINT PK_SWS_KB_GNLCAT PRIMARY KEY (GNLCD, CATCD);

-- 知识库附件
CREATE TABLE SWS_KB_MTM (
    GNLCD            VARCHAR(16)      NOT NULL,
    MTMCD            CHAR(4)          NOT NULL,
    PTH              VARCHAR(100),
    FL               IMAGE
);
ALTER TABLE SWS_KB_MTM ADD CONSTRAINT PK_SWS_KB_MTM PRIMARY KEY (GNLCD, MTMCD);

-- 大事记表
CREATE TABLE SWS_WRP_EVT (
    CD               VARCHAR(30)      NOT NULL,
    WRP              CHAR(3)          NOT NULL,
    WRPCD            VARCHAR(15)      NOT NULL,
    OPTM             DATETIME         NOT NULL,
    TTL              VARCHAR(500)     NOT NULL,
    CNTT             VARCHAR(2000),
    LEV              CHAR(1),
    CAT              CHAR(4)
);
ALTER TABLE SWS_WRP_EVT ADD CONSTRAINT PK_SWS_WRP_EVT PRIMARY KEY (CD, WRPCD);

