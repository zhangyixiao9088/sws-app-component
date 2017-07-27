var map;//地图
var opts = {
width : 250,     // 信息窗口宽度
enableMessage:true//设置允许信息窗发送短息
		     };	
var infoBox;		     
var jzcs=0;//网页加载次数		     		
var nodes = [
	{		//工业 
			"baseInfo":[{name:'新余钢铁集团有限公司',lon:114.940624,lat:27.794976,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"江西省新余市渝水区冶金路1号",img:'./image/secs/map/images/xylgc.jpg'}],
			 
			 "energy": [
	                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '404.9', 'rate': '8.1%', 'arrow': 'up' },
	                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '405.9', 'rate': '8.5%', 'arrow': 'down' },
	                  { 'title': '节能量', 'summary': '节能量', 'big': '403.9', 'rate': '8.2%', 'arrow': 'up' }
	              ],
			"environment": [
	                  { 'title': '化学需氧量', 'summary': '水环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
	                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': '氨氮', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
	              ],
	      
	        "capacity": [
	                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
	                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' },
	                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' }
	              ],
	        "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '51.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '42.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '78.4', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
              
              
              {
              "baseInfo":[{name:'江西赛维LDK太阳能多晶硅有限公司',lon:114.955716,lat:27.913084,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"江西省新余市渝水区",img:'./image/secs/map/images/swldk.jpg'}],
                 "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '384.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '405.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '403.9', 'rate': '8.2%', 'arrow': 'up' }
              ],
               "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
      
        "capacity": [
				  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' },
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' }
              ],
           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '22.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '33.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '68.4', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
	         {
              "baseInfo":[{name:'江西省双强化工有限公司一厂',lon:114.809831,lat:27.830441,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"天工大道19号",img:'./image/secs/map/images/swldk.jpg'}],
              "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '404.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '405.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '403.9', 'rate': '8.2%', 'arrow': 'up' }
              ],
              "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
      
        "capacity": [
                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' },
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' }
                  
              ],
          "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '53.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '32.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '88.4', 'rate': '4.9%', 'arrow': 'down' }
	              ]},      
              {
              "baseInfo":[{name:'江西省双强化工有限公司',lon:114.910585,lat:27.777655,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"天工大道19号",img:'./image/secs/map/images/sqhg.jpg'}],
              "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '404.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '405.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '403.9', 'rate': '8.2%', 'arrow': 'up' }
              ],
              "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
      
        "capacity": [
                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' },
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' }
                  
              ],
          "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '53.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '32.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '88.4', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
	          {
              "baseInfo":[ {name:'江西分宜珠江矿业有限公司分公司',lon:114.766712,lat:27.819196,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"钤山镇大岗山",img:'./image/secs/map/images/fyzjkyfgs.jpg'}],
               "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '404.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '405.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '403.9', 'rate': '8.2%', 'arrow': 'up' }              ],
              "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
        "capacity": [
                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' },	
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' }
              ],
           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '61.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '32.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '88.4', 'rate': '4.9%', 'arrow': 'down' }
	              ]},    
	          {
              "baseInfo":[ {name:'新余恩江铁矿有限公司分公司',lon:114.697722,lat:27.995919,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"钤山镇大岗山",img:'./image/secs/map/images/xyejtkfgs.jpg'}],
               "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '404.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '405.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '403.9', 'rate': '8.2%', 'arrow': 'up' }              ],
              "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
        "capacity": [
                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' },	
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' }
              ],
           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '61.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '32.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '88.4', 'rate': '4.9%', 'arrow': 'down' }
	              ]},        
              {
              "baseInfo":[ {name:'江西分宜珠江矿业有限公司',lon:114.593662,lat:27.64167,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"钤山镇大岗山",img:'./image/secs/map/images/fyzjky.jpg'}],
               "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '404.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '405.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '403.9', 'rate': '8.2%', 'arrow': 'up' }              ],
              "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
        "capacity": [
                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' },	
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' }
              ],
           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '61.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '32.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '88.4', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
              {
              "baseInfo":[{name:'分宜海螺水泥有限责任公司',lon:114.763981,lat:27.861871,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"299县道",img:'./image/secs/map/images/fyhlsn.jpg'}],
              "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '404.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '405.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '403.9', 'rate': '8.2%', 'arrow': 'up' } 
               ],
               "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
        "capacity": [
                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' },
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' }
                 
              ],
          "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '31.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '42.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '68.4', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
              {
              "baseInfo":[{name:'江西江锂科技有限公司',lon:114.675732,lat:27.786987,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"220乡道江锂科技附近",img:'./image/secs/map/images/jxjlkj.jpg'}],
               "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '424.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '415.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '4053.9', 'rate': '8.2%', 'arrow': 'up' }
              ],
              "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
        "capacity": [
                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' },
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' }
              ],
          "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '31.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '42.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '58.4', 'rate': '4.9%', 'arrow': 'down' }
	              ]},{
              "baseInfo":[{name:'江西钢丝厂',lon:114.658664,lat:27.812487,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"白竹路2555号",img:'./image/secs/map/images/jxgsc.jpg'}],
			 "energy": [
	                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '232.9', 'rate': '8.1%', 'arrow': 'up' },
	                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '423.9', 'rate': '8.5%', 'arrow': 'down' },
	                  { 'title': '节能量', 'summary': '节能量', 'big': '413.9', 'rate': '8.2%', 'arrow': 'up' }
	              ],
			"environment": [
	                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
	                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
	              ],
	      
	        "capacity": [
	                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
	                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' },
	                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' }
	              ],
	           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '51.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '42.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '78.4', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
              
              
              {
              "baseInfo":[{name:'新余练钢厂',lon:114.674187,lat:27.808141,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"江西省新余市渝水区",img:'./image/secs/map/images/xylgc.jpg'}],
                 "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '324.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '305.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '503.9', 'rate': '8.2%', 'arrow': 'up' }
              ],
               "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
      
        "capacity": [
                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '134.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '90', 'rate': '70%', 'arrow': 'up' },
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.21', 'rate': '8.3%', 'arrow': 'down' }
              ],
            "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '31.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '52.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '78.4', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
              {
              "baseInfo":[{name:'赣中锅炉厂',lon:114.971418,lat:27.821944,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"新余市渝水区",img:'./image/secs/map/images/gzglc.jpg'}],
              "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '424.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '412.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '483.9', 'rate': '8.2%', 'arrow': 'up' }
              ],
              "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '2级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
      
        "capacity": [
                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '173.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' },
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.91', 'rate': '8.3%', 'arrow': 'down' }
              ],
           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '22.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '48.4', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
              {
              "baseInfo":[ {name:'江口电石厂',lon:114.809579,lat:27.752658,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"搜神路66号",img:'./image/secs/map/images/xyjkdsc.jpg'}],
               "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '204.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '305.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '503.9', 'rate': '8.2%', 'arrow': 'up' }
              ],
              "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
        "capacity": [
				  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '172.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '80', 'rate': '70%', 'arrow': 'up' },	
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '1.1', 'rate': '8.3%', 'arrow': 'down' }
              ],
          "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '32.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '58.4', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
              {
              "baseInfo":[{name:'长虹机械厂',lon:114.902716,lat:27.824244,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"十里街道生态工业园顺兴路21号",img:'./image/secs/map/images/chjxc.jpg'}],
              "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '424.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '245.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '303.9', 'rate': '8.2%', 'arrow': 'up' }
              ],
               "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
        "capacity": [
                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' },
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' }
              ],
           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '54.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '46.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '79.4', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
              {
              "baseInfo":[{name:'新德工业汞有限责任公司',lon:114.919388,lat:27.80354,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"十里街道生态工业园顺兴路99号",img:'./image/secs/map/images/jxxdgybgs.jpg'}],
               "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '324.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '215.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '403.9', 'rate': '8.2%', 'arrow': 'up' }
              ],
              "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
        "capacity": [
                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' },
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' }
              ],
           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '59.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '52.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '78.9', 'rate': '4.9%', 'arrow': 'down' }
	              ]},{
              "baseInfo":[{name:'新余市钢材市场',lon:114.946122,lat:27.715568,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"白竹路189号",img:'./image/secs/map/images/xysgcsc.jpg'}],
			 "energy": [
	                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '424.9', 'rate': '8.1%', 'arrow': 'up' },
	                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '425.9', 'rate': '8.5%', 'arrow': 'down' },
	                  { 'title': '节能量', 'summary': '节能量', 'big': '413.9', 'rate': '8.2%', 'arrow': 'up' }
	              ],
			"environment": [
	                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
	                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
	              ],
	      
	        "capacity": [
	                   { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '194.2', 'rate': '3.1%', 'arrow': 'up' },
	                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '100', 'rate': '70%', 'arrow': 'up' },	
	                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '1.21', 'rate': '8.3%', 'arrow': 'down' }
	              ],
	          "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '50.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '41.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '76.4', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
              
              
              {
              "baseInfo":[{name:'召鑫不锈钢厂',lon:114.997289,lat:27.830633,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"五一立交桥附近",img:'./image/secs/map/images/xyzxbxgc.jpg'}],
                 "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '384.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '405.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '403.9', 'rate': '8.2%', 'arrow': 'up' }
              ],
               "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
      
        "capacity": [
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
              ],
          "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '49.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '74.7', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
              {
              "baseInfo":[{name:'恒顺水泥制品厂',lon:115.001314,lat:27.824244,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"天宫南大道177号",img:'./image/secs/map/images/hssnzpc.jpg'}],
              "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '404.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '405.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '403.9', 'rate': '8.2%', 'arrow': 'up' }
              ],
              "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
      
        "capacity": [
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
              ],
           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '51.2', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '42.6', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '78.9', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
              {
              "baseInfo":[ {name:'新钢机修制氧厂',lon:114.9237,lat:27.805202,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"仙东来大道105附1号",img:'./image/secs/map/images/xgjxzyc.jpg'}],
               "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '404.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '405.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '403.9', 'rate': '8.2%', 'arrow': 'up' }
              ],
              "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
        "capacity": [
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
              ],
           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '46.2', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '40.9', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '72.4', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
              {
              "baseInfo":[{name:'新钢公司棒材厂',lon:114.933474,lat:27.79766,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"劳动北路赣西大道交界处",img:'./image/secs/map/images/xgbcc.jpg'}],
              "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '404.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '405.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '403.9', 'rate': '8.2%', 'arrow': 'up' }
              ],
               "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
        "capacity": [
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
              ],
           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '59.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '62.4', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '108.4', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
              {
              "baseInfo":[{name:'新钢公司球团厂',lon:114.903147,lat:27.673091,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"渝东大道碧桂华苑1栋",img:'./image/secs/map/images/xgqtc.jpg'}],
               "energy": [
                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '424.9', 'rate': '8.1%', 'arrow': 'up' },
                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '415.9', 'rate': '8.5%', 'arrow': 'down' },
                  { 'title': '节能量', 'summary': '节能量', 'big': '4053.9', 'rate': '8.2%', 'arrow': 'up' }
              ],
              "environment": [
                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
              ],
        "capacity": [
                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
              ],
          "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.1', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '32.5', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '68.8', 'rate': '4.9%', 'arrow': 'down' }
	              ]},{
              "baseInfo":[{name:'久隆带钢',lon:114.924993,lat:27.663365,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"昌金高速大广高速交通路口",img:'./image/secs/map/images/jldg.jpg'}],
			 "energy": [
	                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '232.9', 'rate': '8.1%', 'arrow': 'up' },
	                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '423.9', 'rate': '8.5%', 'arrow': 'down' },
	                  { 'title': '节能量', 'summary': '节能量', 'big': '413.9', 'rate': '8.2%', 'arrow': 'up' }
	              ],
			"environment": [
	                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
	                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
	              ],
	      
	        "capacity": [
	                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
	                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
	                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
	              ],
	           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.0', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '46.6', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '79.9', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
	              {
              "baseInfo":[{name:'新德工业泵有线责任公司',lon:114.875371,lat:27.822135,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"昌金高速大广高速交通路口",img:'./image/secs/map/images/jxxdgybgs2.jpg'}],
			 "energy": [
	                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '232.9', 'rate': '8.1%', 'arrow': 'up' },
	                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '423.9', 'rate': '8.5%', 'arrow': 'down' },
	                  { 'title': '节能量', 'summary': '节能量', 'big': '413.9', 'rate': '8.2%', 'arrow': 'up' }
	              ],
			"environment": [
	                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
	                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
	              ],
	      
	        "capacity": [
	                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
	                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
	                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
	              ],
	           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.0', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '46.6', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '79.9', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
	                {
              "baseInfo":[{name:' 江西江锂科技有限公司',lon:114.882845,lat:27.798108,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"站前西路77号",img:'./image/secs/map/images/jxjlkjgs.jpg'}],
			 "energy": [
	                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '232.9', 'rate': '8.1%', 'arrow': 'up' },
	                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '423.9', 'rate': '8.5%', 'arrow': 'down' },
	                  { 'title': '节能量', 'summary': '节能量', 'big': '413.9', 'rate': '8.2%', 'arrow': 'up' }
	              ],
			"environment": [
	                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
	                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
	              ],
	      
	        "capacity": [
	                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
	                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
	                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
	              ],
	           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.0', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '46.6', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '79.9', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
	               {
              "baseInfo":[{name:'江西电工厂',lon:114.963333,lat:27.788393,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"北湖中路42号",img:'./image/secs/map/images/jxdgc.jpg'}],
			 "energy": [
	                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '232.9', 'rate': '8.1%', 'arrow': 'up' },
	                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '423.9', 'rate': '8.5%', 'arrow': 'down' },
	                  { 'title': '节能量', 'summary': '节能量', 'big': '413.9', 'rate': '8.2%', 'arrow': 'up' }
	              ],
			"environment": [
	                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
	                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
	              ],
	      
	        "capacity": [
	                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
	                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
	                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
	              ],
	           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.0', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '46.6', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '79.9', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
	               {
              "baseInfo":[{name:' 新钢公司球团厂 ',lon:114.842888,lat:27.839002,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"创业路31号",img:'./image/secs/map/images/xggsqtc.jpg'}],
			 "energy": [
	                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '232.9', 'rate': '8.1%', 'arrow': 'up' },
	                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '423.9', 'rate': '8.5%', 'arrow': 'down' },
	                  { 'title': '节能量', 'summary': '节能量', 'big': '413.9', 'rate': '8.2%', 'arrow': 'up' }
	              ],
			"environment": [
	                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
	                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
	              ],
	      
	        "capacity": [
	                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
	                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
	                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
	              ],
	           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.0', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '46.6', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '79.9', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
	     		{
              "baseInfo":[{name:' 赣中锅炉厂 ',lon:114.9190277778,lat:27.8217444444,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"迎嘉新村12号",img:'./image/secs/map/images/gzglc2.jpg'}],
			 "energy": [
	                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '232.9', 'rate': '8.1%', 'arrow': 'up' },
	                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '423.9', 'rate': '8.5%', 'arrow': 'down' },
	                  { 'title': '节能量', 'summary': '节能量', 'big': '413.9', 'rate': '8.2%', 'arrow': 'up' }
	              ],
			"environment": [
	                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
	                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
	              ],
	      
	        "capacity": [
	                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
	                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
	                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
	              ],
	           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.0', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '46.6', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '79.9', 'rate': '4.9%', 'arrow': 'down' }
	              ]}, 
	              	{
              "baseInfo":[{name:' 红星炼钢分厂 ',lon:114.9190277778,lat:27.8217444444,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"迎嘉新村12号",img:'./image/secs/map/images/hxlgfc.jpg'}],
			 "energy": [
	                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '232.9', 'rate': '8.1%', 'arrow': 'up' },
	                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '423.9', 'rate': '8.5%', 'arrow': 'down' },
	                  { 'title': '节能量', 'summary': '节能量', 'big': '413.9', 'rate': '8.2%', 'arrow': 'up' }
	              ],
			"environment": [
	                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
	                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
	              ],
	      
	        "capacity": [
	                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
	                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
	                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
	              ],
	           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.0', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '46.6', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '79.9', 'rate': '4.9%', 'arrow': 'down' }
	              ]}, 
	          	{
              "baseInfo":[{name:'双强化工厂',lon:114.9190277778,lat:27.8217444444,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"迎嘉新村12号",img:'./image/secs/map/images/jxsqhg.jpg'}],
			 "energy": [
	                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '232.9', 'rate': '8.1%', 'arrow': 'up' },
	                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '423.9', 'rate': '8.5%', 'arrow': 'down' },
	                  { 'title': '节能量', 'summary': '节能量', 'big': '413.9', 'rate': '8.2%', 'arrow': 'up' }
	              ],
			"environment": [
	                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
	                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
	              ],
	      
	        "capacity": [
	                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
	                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
	                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
	              ],
	           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.0', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '46.6', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '79.9', 'rate': '4.9%', 'arrow': 'down' }
	              ]}, 
	              	{
              "baseInfo":[{name:'双强化工分厂',lon:114.828515,lat:27.848713,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"团结西路1888号",img:'./image/secs/map/images/jxsqhgyc.jpg'}],
			 "energy": [
	                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '232.9', 'rate': '8.1%', 'arrow': 'up' },
	                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '423.9', 'rate': '8.5%', 'arrow': 'down' },
	                  { 'title': '节能量', 'summary': '节能量', 'big': '413.9', 'rate': '8.2%', 'arrow': 'up' }
	              ],
			"environment": [
	                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
	                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
	              ],
	      
	        "capacity": [
	                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
	                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
	                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
	              ],
	           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.0', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '46.6', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '79.9', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
	              {
              "baseInfo":[{name:' 江西分宜珠江矿业有限公司',lon:114.912453,lat:27.854334,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"高新大道775号",img:'./image/secs/map/images/jxfyzjkygs.jpg'}],
			 "energy": [
	                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '232.9', 'rate': '8.1%', 'arrow': 'up' },
	                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '423.9', 'rate': '8.5%', 'arrow': 'down' },
	                  { 'title': '节能量', 'summary': '节能量', 'big': '413.9', 'rate': '8.2%', 'arrow': 'up' }
	              ],
			"environment": [
	                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
	                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
	              ],
	      
	        "capacity": [
	                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
	                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
	                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
	              ],
	           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.0', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '46.6', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '79.9', 'rate': '4.9%', 'arrow': 'down' }
	              ]}, 
	                {
              "baseInfo":[{name:'江西锻压厂',lon:114.768724,lat:27.834403,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"高新大道7824号",img:'./image/secs/map/images/jxyldy.jpg'}],
			 "energy": [
	                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '232.9', 'rate': '8.1%', 'arrow': 'up' },
	                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '423.9', 'rate': '8.5%', 'arrow': 'down' },
	                  { 'title': '节能量', 'summary': '节能量', 'big': '413.9', 'rate': '8.2%', 'arrow': 'up' }
	              ],
			"environment": [
	                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
	                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
	              ],
	      
	        "capacity": [
	                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
	                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
	                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
	              ],
	           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.0', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '46.6', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '79.9', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
	               {
              "baseInfo":[{name:'红星炼钢分厂',lon:114.874078,lat:27.818429,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"高新南大道75号",img:'./image/secs/map/images/hxlgfc.jpg'}],
			 "energy": [
	                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '232.9', 'rate': '8.1%', 'arrow': 'up' },
	                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '423.9', 'rate': '8.5%', 'arrow': 'down' },
	                  { 'title': '节能量', 'summary': '节能量', 'big': '413.9', 'rate': '8.2%', 'arrow': 'up' }
	              ],
			"environment": [
	                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
	                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
	              ],
	      
	        "capacity": [
	                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
	                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
	                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
	              ],
	           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.0', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '46.6', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '79.9', 'rate': '4.9%', 'arrow': 'down' }
	              ]},   
	                    {
              "baseInfo":[{name:'红星炼钢厂',lon:114.722731,lat:27.799642,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"高新南大道75号",img:'./image/secs/map/images/hxlgc.jpg'}],
			 "energy": [
	                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '232.9', 'rate': '8.1%', 'arrow': 'up' },
	                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '423.9', 'rate': '8.5%', 'arrow': 'down' },
	                  { 'title': '节能量', 'summary': '节能量', 'big': '413.9', 'rate': '8.2%', 'arrow': 'up' }
	              ],
			"environment": [
	                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
	                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
	              ],
	      
	        "capacity": [
	                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
	                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
	                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
	              ],
	           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.0', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '46.6', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '79.9', 'rate': '4.9%', 'arrow': 'down' }
	              ]},
	                        {
              "baseInfo":[{name:'红星炼钢厂',lon:114.722731,lat:27.799642,icon:'./image/secs/map/mark/id_06.png',type:"industrial",address:"高新南大道75号",img:'./image/secs/map/images/hxlgc.jpg'}],
			 "energy": [
	                  { 'title': '万元产值能耗', 'summary': '万元产值能耗', 'big': '232.9', 'rate': '8.1%', 'arrow': 'up' },
	                  { 'title': '能耗总量', 'summary': '能耗总量', 'big': '423.9', 'rate': '8.5%', 'arrow': 'down' },
	                  { 'title': '节能量', 'summary': '节能量', 'big': '413.9', 'rate': '8.2%', 'arrow': 'up' }
	              ],
			"environment": [
	                  { 'title': 'SO2总量', 'summary': 'SO2环境质量', 'big': '3级', 'rate': '不达标', 'arrow': 'no' },
	                  { 'title': 'COD总量', 'summary': 'COD环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': 'NOx总量', 'summary': 'NOx环境质量', 'big': '1级', 'rate': '达标', 'arrow': 'no' },
	                  { 'title': '氨氮总量', 'summary': '氨氮环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' }
	              ],
	      
	        "capacity": [
	                  { 'title': '钢材产能', 'summary': '钢材产能(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
	                  { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '174.2', 'rate': '3.1%', 'arrow': 'up' },
	                  { 'title': '能耗增量', 'summary': '能耗增量(万吨标煤)', 'big': '70', 'rate': '70%', 'arrow': 'up' }
	              ],
	           "economy": [
	                  { 'title': '钢产值', 'summary': '钢产值(亿元)', 'big': '41.0', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '生铁产值', 'summary': '生铁产值(亿元)', 'big': '46.6', 'rate': '4.9%', 'arrow': 'down' },
	                  { 'title': '钢材产值', 'summary': '钢材产值(亿元)', 'big': '79.9', 'rate': '4.9%', 'arrow': 'down' }
	              ]},   
	              //建筑  building                                      
             {
       "baseInfo":[{name:'市政府办公大楼',lon:114.9190277778,lat:27.8217444444,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"迎嘉新村12号",img:'./image/secs/map/images/xyszfbgdl.jpg'}],
		"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '150.09 ', 'rate': '0.30 %', 'arrow': 'no' },
		{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '94.57 ', 'rate': '0.60 %', 'arrow': 'no' },
		{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '8.73 ', 'rate': '0.48 %', 'arrow': 'no' }],
		"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '良好 ', 'rate': '1.09 %', 'arrow': 'no' },
		{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '30.52 ', 'rate': '0.05 %', 'arrow': 'no' },
		{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '52.20 ', 'rate': '0.26 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '32.49 ', 'rate': '0.15 %', 'arrow': 'no' },
		{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.59 ', 'rate': '0.30 %', 'arrow': 'no' },
		{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '38.49 ', 'rate': '0.06 %', 'arrow': 'no' }],
		"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '96.37 ', 'rate': '0.22 %', 'arrow': 'no' },
		{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '30.36 ', 'rate': '0.16 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'市人民检察院',lon:114.9205972222,lat:27.8219472222,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"团结西路1888号",img:'./image/secs/map/images/xysrmjcy.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '126.80 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '95.36 ', 'rate': '0.36 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '8.06 ', 'rate': '0.51 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般 ', 'rate': '0.93 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '23.42 ', 'rate': '0.12 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '43.66 ', 'rate': '0.10 %', 'arrow': 'no' }],
			 "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '41.27 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '20.54 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '39.81 ', 'rate': '0.28 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '83.79 ', 'rate': '0.19 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '32.98 ', 'rate': '0.19 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'市人民检察院',lon:114.9076611111,lat:27.8169805556,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"仙女湖大道783号",img:'./image/secs/map/images/xysrmjcy2.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '99.89 ', 'rate': '0.31 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '88.38 ', 'rate': '0.57 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.78 ', 'rate': '0.30 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '良好', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '24.17 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '44.57 ', 'rate': '0.22 %', 'arrow': 'no' }],
			 "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '41.95 ', 'rate': '0.10 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '20.01 ', 'rate': '0.09 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '44.27 ', 'rate': '0.16 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '72.67 ', 'rate': '0.28 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '98.09 ', 'rate': '0.08 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'新余市房产管理局',lon:114.9174583333,lat:27.8284361111,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"大宫来大道918号",img:'./image/secs/map/images/xysfcglj.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '100.89 ', 'rate': '0.32 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '110.76 ', 'rate': '0.35 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.33 ', 'rate': '0.48 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '良好', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '25.80 ', 'rate': '0.26 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '41.13 ', 'rate': '0.03 %', 'arrow': 'no' }],
			 "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '33.09 ', 'rate': '0.15 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '23.35 ', 'rate': '0.06 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '32.89 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '89.73 ', 'rate': '0.26 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '30 ', 'rate': '0.24 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'市人保局',lon:114.925,lat:27.8372222222,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"高新大道190号",img:'./image/secs/map/images/xysrzsbj.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '91.59 ', 'rate': '0.32 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '85.86 ', 'rate': '0.30 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '8.83 ', 'rate': '0.30 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '良好', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.36 ', 'rate': '0.23 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '40.18 ', 'rate': '0.05 %', 'arrow': 'no' }],
			 "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '37.28 ', 'rate': '0.30 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '20.38 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '44.98 ', 'rate': '0.23 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.02 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '104.61 ', 'rate': '0.10 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'北湖宾馆',lon:114.9124611111,lat:27.8264666667,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"白竹路455号",img:'./image/secs/map/images/xybhbg.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '79.11 ', 'rate': '0.31 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '97.12 ', 'rate': '0.40 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '10.53 ', 'rate': '0.55 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '良好', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '29.88 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '49.18 ', 'rate': '0.19 %', 'arrow': 'no' }],
			 "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '37.43 ', 'rate': '0.04 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '23.10 ', 'rate': '0.15 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '35.65 ', 'rate': '0.11 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '72.17 ', 'rate': '0.29 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '43 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'新余悦华商务大酒店',lon:114.9232222222,lat:27.8233055556,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"春龙大道189号",img:'./image/secs/map/images/xyyhswjd.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '97.66 ', 'rate': '0.31 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '92.64 ', 'rate': '0.40 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '10.33 ', 'rate': '0.49 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '良好', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '21.83 ', 'rate': '0.23 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '45.67 ', 'rate': '0.10 %', 'arrow': 'no' }],
			 "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '45.95 ', 'rate': '0.04 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '16.95 ', 'rate': '0.16 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '37.71 ', 'rate': '0.31 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '77.16 ', 'rate': '0.23 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '24 ', 'rate': '0.18 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'新余钟山国际大酒店',lon:114.9157666667,lat:27.8210361111,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"春龙大道89号",img:'./image/secs/map/images/xyzsgjdjd.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '103.42 ', 'rate': '0.31 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '80.41 ', 'rate': '0.42 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '8.02 ', 'rate': '0.47 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '良好', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '23.18 ', 'rate': '0.17 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '53.13 ', 'rate': '0.06 %', 'arrow': 'no' }],
			 "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '45.71 ', 'rate': '0.22 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.54 ', 'rate': '0.23 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '40.16 ', 'rate': '0.07 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '101.02 ', 'rate': '0.27 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '43 ', 'rate': '0.27 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'新余学院教学主楼A栋',lon:114.992982588211,lat:27.8589691193352,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"春龙大道1111号",img:'./image/secs/map/images/xyxyjxlzla.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '96.50 ', 'rate': '0.32 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '102.95 ', 'rate': '0.42 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '8.52 ', 'rate': '0.37 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '29.41 ', 'rate': '0.28 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '45.48 ', 'rate': '0.07 %', 'arrow': 'no' }],
			 "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '37.85 ', 'rate': '0.10 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '20.67 ', 'rate': '0.26 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '44.40 ', 'rate': '0.25 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '101.07 ', 'rate': '0.14 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '37 ', 'rate': '0.11 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'市中医院',lon:114.935975,lat:27.8042944444,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"春龙大道233号",img:'./image/secs/map/images/xyzyy.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '85.11 ', 'rate': '0.32 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '93.49 ', 'rate': '0.44 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '8.10 ', 'rate': '0.38 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '22.64 ', 'rate': '0.25 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '41.38 ', 'rate': '0.09 %', 'arrow': 'no' }],
			 "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '36.44 ', 'rate': '0.06 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '23.32 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '35.45 ', 'rate': '0.06 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '106.52 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '43 ', 'rate': '0.13 %', 'arrow': 'no' }]
        },{	
        	"baseInfo":[{name:'市妇幼保健院',lon:114.9281138889,lat:27.8104694444,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"东新路189号",img:'./image/secs/map/images/xyfybjy.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '79.25 ', 'rate': '0.31 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '101.74 ', 'rate': '0.50 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '10.69 ', 'rate': '0.49 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '21.83 ', 'rate': '0.14 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '49.69 ', 'rate': '0.26 %', 'arrow': 'no' }],
			 "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '36.58 ', 'rate': '0.04 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.51 ', 'rate': '0.06 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '33.45 ', 'rate': '0.23 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '104.03 ', 'rate': '0.28 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '34 ', 'rate': '0.15 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'第四医院门诊楼',lon:114.9414916667,lat:27.8235694444,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道221号",img:'./image/secs/map/images/xydsyy.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '97.45 ', 'rate': '0.31 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '108.77 ', 'rate': '0.42 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.81 ', 'rate': '0.43 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '27.09 ', 'rate': '0.05 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '55.17 ', 'rate': '0.27 %', 'arrow': 'no' }],
			 "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '45.25 ', 'rate': '0.29 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '22.68 ', 'rate': '0.22 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '42.97 ', 'rate': '0.27 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '86.72 ', 'rate': '0.02 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '32.2 ', 'rate': '0.19 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'市人民医院后勤大楼',lon:114.9452722222,lat:27.8305833333,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道121号",img:'./image/secs/map/images/xysrmyyhqdl.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '97.61 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '92.91 ', 'rate': '0.46 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '10.15 ', 'rate': '0.48 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.44 ', 'rate': '0.15 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '43.40 ', 'rate': '0.14 %', 'arrow': 'no' }],
			 "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '32.27 ', 'rate': '0.12 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '20.79 ', 'rate': '0.06 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '36.94 ', 'rate': '0.22 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '79.10 ', 'rate': '0.30 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '34.19 ', 'rate': '0.24 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'步步高连锁超市',lon:114.9338638889,lat:27.8046138889,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/bbglscs.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '97.39 ', 'rate': '0.32 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '117.48 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '8.41 ', 'rate': '0.35 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '31.19 ', 'rate': '0.03 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '54.64 ', 'rate': '0.27 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '43.76 ', 'rate': '0.01 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '22.34 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '47.42 ', 'rate': '0.25 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '92.20 ', 'rate': '0.09 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '38.95 ', 'rate': '0.13 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'华润万家商业连锁',lon:114.9338361111,lat:27.8102277778,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道1号",img:'./image/secs/map/images/hlwjcs.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '89.25 ', 'rate': '0.30 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '115.08 ', 'rate': '0.39 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '11.74 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '23.61 ', 'rate': '0.23 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '41.18 ', 'rate': '0.31 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '32.97 ', 'rate': '0.04 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '22.99 ', 'rate': '0.02 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.02 ', 'rate': '0.20 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '95.31 ', 'rate': '0.31 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '34.03 ', 'rate': '0.20 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'沃尔玛购物商场',lon:114.9275083333,lat:27.8014722222,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道31号",img:'./image/secs/map/images/wemsc.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '83.87 ', 'rate': '0.32 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '92.29 ', 'rate': '0.52 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '8.95 ', 'rate': '0.39 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '29.53 ', 'rate': '0.14 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '51.40 ', 'rate': '0.25 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '39.91 ', 'rate': '0.26 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.27 ', 'rate': '0.30 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '35.07 ', 'rate': '0.25 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '92.28 ', 'rate': '0.10 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '37.03 ', 'rate': '0.19 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'新余市人民法院',lon:114.9118563658,lat:27.8218675585,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道141号",img:'./image/secs/map/images/xyrmfy.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '100.82 ', 'rate': '0.31 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '93.65 ', 'rate': '0.39 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '10.41 ', 'rate': '0.55 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '24.40 ', 'rate': '0.12 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '53.12 ', 'rate': '0.05 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.77 ', 'rate': '0.04 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '16.17 ', 'rate': '0.22 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.24 ', 'rate': '0.16 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '101.95 ', 'rate': '0.29 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '38.07 ', 'rate': '0.09 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'市政府办公楼',lon:114.9130143658,lat:27.8220025585,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/xyzfbgl.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '34.05 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'五湖大酒店',lon:114.895062,lat:27.791205,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/xywhdjd.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '33.05 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'永辉超市',lon:114.925245,lat:27.792739,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/yhcs.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' },
			{ 'title': '气耗', 'summary': '立方米', 'big': '10.79 ', 'rate': '0.36 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '29.05 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'人社大楼',lon:114.885001,lat:27.802709,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/xysrzsbj.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '31.05 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'新余市劳动局',lon:114.916765,lat:27.813445,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/xyldj.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '32.09 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'444号便利店',lon:114.950541,lat:27.837469,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/444bld.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '34.35 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'渝水区社区医院',lon:114.947523,lat:27.829036,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/ysqsqyy.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '36.05 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'新余市国土局',lon:114.94048,lat:27.795424,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/xygtj.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '34.65 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'新余干部学校图书楼',lon:114.94048,lat:27.795424,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/xygbxytsg.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' },
			{ 'title': '气耗', 'summary': '立方米', 'big': '10.79 ', 'rate': '0.36 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '39.01 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'市图书大楼',lon:114.918346,lat:27.791077,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/xystsg.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '35.02 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'新余自然博物馆',lon:114.920071,lat:27.812806,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/xyzrbwg.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '36.66 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'新余市博物馆',lon:114.913172,lat:27.796446,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/xybwg.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '29.99 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'市博物馆',lon:114.913172,lat:27.796446,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/xybwg.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '30.22 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'市博物馆',lon:114.931282,lat:27.79798,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/xybwg.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '37.77 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'北湖宾馆',lon:114.935306,lat:27.819452,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/xybhbg.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '38.20 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'风情物业',lon:114.929844,lat:27.827119,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/xyfqwy.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '39.11 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'市供电局',lon:114.886726,lat:27.823797,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/xygdj.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '39.12 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'市出租公司大楼',lon:114.897074,lat:27.809483,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/xyczgs.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '40.04 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },{
        	"baseInfo":[{name:'市工商局大楼',lon:114.896499,lat:27.809739,icon:'./image/secs/map/mark/id_05.png',type:"building",address:"敏秀西大道21号",img:'./image/secs/map/images/xygsjbgdl.jpg'}],
			"energy": [{ 'title': '能耗总量', 'summary': '能耗总量(吨标煤)', 'big': '98.60 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总电耗', 'summary': '总电耗(万千瓦时)', 'big': '100.96 ', 'rate': '0.33 %', 'arrow': 'no' },
			{ 'title': '总水耗', 'summary': '总水耗(千立方米)', 'big': '9.07 ', 'rate': '0.57 %', 'arrow': 'no' }],
			"environment": [{ 'title': '室内空气质量AQI', 'summary': '室内空气质量AQI', 'big': '一般', 'rate': '1.10 %', 'arrow': 'no' },
			{ 'title': '室外温度', 'summary': '室外温度(摄氏度)', 'big': '28.64 ', 'rate': '0.13 %', 'arrow': 'no' },
			{ 'title': '噪声', 'summary': '噪声(分贝)', 'big': '48.18 ', 'rate': '0.22 %', 'arrow': 'no' }], "capacity": [
			{ 'title': '空调设备电耗', 'summary': '空调设备电耗(千瓦时)', 'big': '42.12 ', 'rate': '0.21 %', 'arrow': 'no' },
			{ 'title': '动力设备电耗', 'summary': '动力设备电耗(千瓦时)', 'big': '21.68 ', 'rate': '0.11 %', 'arrow': 'no' },
			{ 'title': '特殊设备电耗', 'summary': '特殊设备电耗(千瓦时)', 'big': '34.45 ', 'rate': '0.09 %', 'arrow': 'no' }],
			"economy": [{ 'title': '人均建筑电耗', 'summary': '人均建筑电耗(千瓦时/人)', 'big': '90.43 ', 'rate': '0.20 %', 'arrow': 'no' },
			{ 'title': '单位建筑面积电耗', 'summary': '单位建筑面积电耗(千瓦时/平方米)', 'big': '37.89 ', 'rate': '0.23 %', 'arrow': 'no' }]
        },      
        //照明 light      
          {
       	"baseInfo":[{name:'仙来西大道延伸段',lon:114.619821,lat:27.798491,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '12.50 ', 'rate': '0.60 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.50 ', 'rate': '0.61%', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '4.80', 'rate': '0.55 %', 'arrow': 'no' }
		],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '30 ', 'rate': '0.25 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '42.45 ', 'rate': '0.20 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'仙来西大道长林医院对面',lon:114.639943,lat:27.796957,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '13.80 ', 'rate': '0.65 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.22 ', 'rate': '0.56 %', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '5.57 ', 'rate': '0.69 %', 'arrow': 'no' }
		],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '32 ', 'rate': '0.26 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '43.42 ', 'rate': '0.28 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'仙来西大道五一路口',lon:114.639943,lat:114.639943,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '12.12 ', 'rate': '0.58 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.27 ', 'rate': '0.57 %', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '4.56 ', 'rate': '0.52 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '35 ', 'rate': '0.28 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '41.20 ', 'rate': '0.168 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'仙来西大道十五公司公变',lon:114.667827,lat:27.809994,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '14.57 ', 'rate': '0.69 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.80 ', 'rate': '0.66 %', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '5.27 ', 'rate': '0.61 %', 'arrow': 'no' }
		],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '34 ', 'rate': '0.26 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '45.49 ', 'rate': '0.32 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'仙来西大道万年青旁',lon:114.673576,lat:27.801303,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '13.32 ', 'rate': '0.69 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '6.52 ', 'rate': '0.72 %', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '4.99 ', 'rate': '0.65 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '31 ', 'rate': '0.25 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '44.64 ', 'rate': '0.22 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'仙来西大道广播电视局路口',lon:114.6799,lat:27.816896,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '11.11 ', 'rate': '0.56 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.76 ', 'rate': '0.63 %', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '5.20 ', 'rate': '0.60 %', 'arrow': 'no' }
		],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '36 ', 'rate': '0.30 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '40.49 ', 'rate': '0.16 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'仙来东大道松山楼前',lon:114.673001,lat:27.830441,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '13.80 ', 'rate': '0.65 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '6.62 ', 'rate': '0.74 %', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '4.32 ', 'rate': '0.52 %', 'arrow': 'no' }
		],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '37 ', 'rate': '0.35 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '44.49 ', 'rate': '0.24 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'天公南大道渝三学院',lon:114.693985,lat:27.836064,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '15.31 ', 'rate': '0.72 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.26 ', 'rate': '0.57 %', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '4.86 ', 'rate': '0.56 %', 'arrow': 'no' }
		],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '31 ', 'rate': '0.26 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '43.46 ', 'rate': '0.23 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'天公北大道北湖路口',lon:114.693985,lat:27.836064,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '15.55 ', 'rate': '0.76 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.22 ', 'rate': '0.57%', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '4.88 ', 'rate': '0.58 %', 'arrow': 'no' }
		],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '40 ', 'rate': '0.35 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '48.49 ', 'rate': '0.36 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'北湖西路天工北路口加油站',lon:114.706346,lat:27.833253,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '16.54 ', 'rate': '0.78 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '6.27 ', 'rate': '0.72 %', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '4.60 ', 'rate': '0.54 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '32 ', 'rate': '0.27 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '40.24 ', 'rate': '0.18 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'北湖中路建行前',lon:114.71037,lat:27.818429,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '12.90 ', 'rate': '0.66%', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '6.10 ', 'rate': '0.74 %', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '5.10 ', 'rate': '0.62 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '34 ', 'rate': '0.28 %', 'arrow': 'no' },
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.20 ', 'rate': '0.23 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '46.21 ', 'rate': '0.36 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'北湖西路五一路口',lon:114.707783,lat:27.798747,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '15.57 ', 'rate': '0.79 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '6.72 ', 'rate': '0.75 %', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '5.60 ', 'rate': '0.68 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '37 ', 'rate': '0.32 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '41.45 ', 'rate': '0.19%', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'北湖西路市二大公园公变',lon:114.887444,lat:27.800536,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '19.21 ', 'rate': '0.81 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '8.57 ', 'rate': '0.83 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '6.57 ', 'rate': '0.75 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '41 ', 'rate': '0.45 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '45.89 ', 'rate': '0.36 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'北湖东路丰源南路口',lon:114.908429,lat:27.83453,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '16.25 ', 'rate': '0.77 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '6.58 ', 'rate': '0.71 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '5.45 ', 'rate': '0.61 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '36 ', 'rate': '0.28%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '45.10 ', 'rate': '0.31 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'长青北路中山路口',lon:114.931713,lat:27.826863,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '12.20 ', 'rate': '0.59 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '4.17 ', 'rate': '0.52 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '4.24 ', 'rate': '0.51 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '31 ', 'rate': '0.25 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '39.87 ', 'rate': '0.18 %', 'arrow': 'no' }],
		"economy": [{ 'title': '人均建筑电耗', 'summary': '千瓦时/人', 'big': '86.37 ', 'rate': '0.32 %', 'arrow': 'no' },
		{ 'title': '单位面积电耗', 'summary': '千瓦时/平方米', 'big': '84.36 ', 'rate': '0.26 %', 'arrow': 'no' }]
        },{
       	"baseInfo":[{name:'长青立交桥下站前',lon:114.936887,lat:27.813317,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '11.68 ', 'rate': '0.57 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '4.15 ', 'rate': '0.52 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '3.95 ', 'rate': '0.50 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '30 ', 'rate': '0.25 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '35.56 ', 'rate': '0.18 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'青年路青泉花园前',lon:114.953272,lat:27.813317,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '16.50 ', 'rate': '0.74 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.52 ', 'rate': '0.69 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '4.99 ', 'rate': '0.58 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '34 ', 'rate': '0.27 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '40.51 ', 'rate': '0.18 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'竹山路总工会前',lon:114.937462,lat:27.780595,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '15.24 ', 'rate': '0.74	 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.52 ', 'rate': '0.70 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '5.27 ', 'rate': '0.59 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '36 ', 'rate': '0.27 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '43.49 ', 'rate': '0.36 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'长青立交桥下站前',lon:114.913459,lat:27.790311,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '14.42 ', 'rate': '0.66 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.67 ', 'rate': '0.62%', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '4.97 ', 'rate': '0.58 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '31 ', 'rate': '0.26 %', 'arrow': 'no' },
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.20 ', 'rate': '0.26 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '45.49 ', 'rate': '0.32 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'青年路青泉花园前',lon:114.866316,lat:27.806671,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '12.24 ', 'rate': '0.58%', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.27 ', 'rate': '0.6056 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '4.67 ', 'rate': '0.52 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '34 ', 'rate': '0.26 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '42.48 ', 'rate': '0.21 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'竹山路总工会前',lon:114.913459,lat:27.790311,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '13.26 ', 'rate': '0.65 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.46 ', 'rate': '0.67 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '5.27 ', 'rate': '0.60 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '36 ', 'rate': '0.32 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '44.60 ', 'rate': '0.28 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'竹山路地税前',lon:114.896499,lat:27.791589,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '13.57 ', 'rate': '0.62 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.52 ', 'rate': '0.62 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '4.88 ', 'rate': '0.56 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '37 ', 'rate': '0.34 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '46.49 ', 'rate': '0.35 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'里木塘',lon:114.855968,lat:27.804626,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '17.75 ', 'rate': '0.75 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '6.56 ', 'rate': '0.74 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '6.17 ', 'rate': '0.68 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '40 ', 'rate': '0.38%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '48.49 ', 'rate': '0.34 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'劳动北路青年路口',lon:114.929269,lat:27.766787,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '18.47 ', 'rate': '0.78 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '7.37 ', 'rate': '0.70%', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '6.67 ', 'rate': '0.68%', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '34 ', 'rate': '0.27 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '47.49 ', 'rate': '0.33 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'劳动北路仙来路口',lon:114.924958,lat:27.808461,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '11.17 ', 'rate': '0.58%', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '3.57 ', 'rate': '0.56%', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '3.57 ', 'rate': '0.54 %', 'arrow': 'no' }],
		"environment": [{ 'title': '灯数', 'summary': '盏', 'big': '31', 'rate': '0.26 %', 'arrow': 'no' },
		{ 'title': '噪声', 'summary': '分贝', 'big': '56.20 ', 'rate': '0.29 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '42.49 ', 'rate': '0.28 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'劳动北路烟草前',lon:114.885863,lat:27.822519,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '13.37 ', 'rate': '0.63 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '4.89 ', 'rate': '0.55 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '4.54 ', 'rate': '0.56%', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '30 ', 'rate': '0.25 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '39.67 ', 'rate': '0.19 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'劳动北路杨家村',lon:114.801926,lat:27.838364,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '15.42 ', 'rate': '0.68 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.57 ', 'rate': '0.63 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '4.87 ', 'rate': '0.58 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '33 ', 'rate': '0.26 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '40.47 ', 'rate': '0.29 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'白竹西路天工路口',lon:114.768293,lat:27.829675,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '15.24 ', 'rate': '0.72 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.79 ', 'rate': '0.65 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '5.27 ', 'rate': '0.60 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '33 ', 'rate': '0.31 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '42.49 ', 'rate': '0.21 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'白竹东路天青路口',lon:114.824635,lat:27.834786,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '17.56 ', 'rate': '0.74 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '6.67 ', 'rate': '0.74 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '5.32 ', 'rate': '0.61 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '31 ', 'rate': '0.29 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '43.43 ', 'rate': '0.31 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'五一南路新钢路口',lon:114.737248,lat:27.808716,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '11.17 ', 'rate': '0.57 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '4.88 ', 'rate': '0.59 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '4.22 ', 'rate': '0.53 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '29 ', 'rate': '0.18 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '36.49 ', 'rate': '0.19 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'中山路北湖路东口',lon:114.825785,lat:27.848074,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '18.85 ', 'rate': '0.74 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '7.43 ', 'rate': '0.76 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '6.24 ', 'rate': '0.69 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '38 ', 'rate': '0.35 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '44.49 ', 'rate': '0.06 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'中山路北湖路西口',lon:114.822048,lat:27.842963,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '16.77 ', 'rate': '0.75 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '6.17 ', 'rate': '0.74 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '6.27 ', 'rate': '0.66 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '37 ', 'rate': '0.30 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '46.49 ', 'rate': '0.35 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'凌上路青少年宫对面',lon:114.77318,lat:27.845263,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '19.21 ', 'rate': '0.81 %', 'arrow': 'no' },
			{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '8.84 ', 'rate': '0.82 %', 'arrow': 'no' },
			{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '7.47 ', 'rate': '0.74 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '44 ', 'rate': '0.37%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '48.49 ', 'rate': '0.34 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'科环东路科技学院对面',lon:114.782091,lat:27.799258,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '17.13 ', 'rate': '0.710 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.89 ', 'rate': '0.72 %', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '5.26 ', 'rate': '0.64 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '35 ', 'rate': '0.31 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '42.87 ', 'rate': '0.31 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'科环中路长青路口',lon:114.816011,lat:27.804371,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '15.57 ', 'rate': '0.71 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.37 ', 'rate': '0.61 %', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '5.67 ', 'rate': '0.65 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '30 ', 'rate': '0.05 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '44.49 ', 'rate': '0.26 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'科环西路长林路口',lon:114.684499,lat:27.823669,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '13.57 ', 'rate': '0.60 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.74 ', 'rate': '0.63 %', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '5.56 ', 'rate': '0.64 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '34 ', 'rate': '0.26 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '39.49 ', 'rate': '0.26 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'人民路桂花城对面',lon:114.954566,lat:27.804499,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '14.57 ', 'rate': '0.64 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '5.97 ', 'rate': '0.64%', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '5.57 ', 'rate': '0.64 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '32 ', 'rate': '0.24 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '41.56 ', 'rate': '0.35 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'劳动南路加油站对面',lon:114.958087,lat:27.781042,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '15.57 ', 'rate': '0.70 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '6.07 ', 'rate': '0.65%', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '5.37 ', 'rate': '0.63 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '30 ', 'rate': '0.05 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '38.49 ', 'rate': '0.06 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'劳动南路桥下站前',lon:114.947954,lat:27.79913,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '14.05 ', 'rate': '0.66 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '6.07 ', 'rate': '0.68 %', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '4.92 ', 'rate': '0.60 2%', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '35 ', 'rate': '0.28 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '44.49 ', 'rate': '0.32%', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'站前西路阿伟粥前',lon:114.686296,lat:27.821177,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '15.34 ', 'rate': '0.69 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '6.57 ', 'rate': '0.62 %', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '5.57 ', 'rate': '0.68 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '39 ', 'rate': '0.34%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '47.49 ', 'rate': '0.34 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'公园北路抱石公园前',lon:114.680906,lat:27.826225,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '10..57 ', 'rate': '0.57 %', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '4.46 ', 'rate': '0.52 %', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '5.45 ', 'rate': '0.60 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '36 ', 'rate': '0.31 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '47.49 ', 'rate': '0.36 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },{
       	"baseInfo":[{name:'胜利北路香港城前',lon:114.696644,lat:27.811464,icon:'./image/secs/map/mark/id_04.png',type:"light",address:"主干道"}],
		"environment": [{ 'title': '能耗总量', 'summary': '能耗总量(万千瓦时)', 'big': '21.32 ', 'rate': '0.88%', 'arrow': 'no' },
		{ 'title': '高压钠灯能耗', 'summary': '高压钠灯能耗(万千瓦时)', 'big': '10.79 ', 'rate': '0.85 %', 'arrow': 'no' },
		{ 'title': 'LED路灯能耗', 'summary': 'LED路灯能耗(万千瓦时)', 'big': '8.42 ', 'rate': '0.87 %', 'arrow': 'no' }],
		"economy": [{ 'title': '灯数', 'summary': '盏', 'big': '42 ', 'rate': '0.45 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '照明功率密度值', 'summary': '照明功率密度值(w/m2)', 'big': '46.49 ', 'rate': '0.36 %', 'arrow': 'no' }],
		"energy": [{ 'title': '类型', 'summary': '城市主干道', 'big': '城市主干道 ', 'rate': '', 'arrow': '' }]
        },
         //traffic 交通
        {
       	"baseInfo":[{name:'分宜汽车运输总公司',lon:114.684499,lat:27.823669,icon:'./image/secs/map/mark/id_02.png',type:"traffic",address:"府前路21号"}],
		"energy": [{ 'title': '货物运输', 'summary': '车辆', 'big': '货物运输 ', 'rate': '', 'arrow': '' }],
		"environment": [{ 'title': '汽油用量', 'summary': '汽油用量(L)', 'big': '30.11 ', 'rate': '0.5 %', 'arrow': 'no' },
		{ 'title': '柴油用量', 'summary': '柴油用量(L)', 'big': '52.1 ', 'rate': '0.21 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '百公里油耗', 'summary': '百公里油耗(升/公里)', 'big': '38.41 ', 'rate': '0.6%', 'arrow': 'no' }],
		"economy": [{ 'title': '二氧化碳排放量', 'summary': '二氧化碳排放量(KG)', 'big': '96.17 ', 'rate': '0.22 %', 'arrow': 'no' }]
        },{
       	"baseInfo":[{name:'分宜县汽车运输有限公司',lon:114.686296,lat:27.821177,icon:'./image/secs/map/mark/id_02.png',type:"traffic",address:"府前路21号"}],
		"energy": [{ 'title': '货物运输', 'summary': '车辆', 'big': '货物运输 ', 'rate': '', 'arrow': '' }],
		"environment": [{ 'title': '汽油用量', 'summary': '汽油用量(L)', 'big': '30.22 ', 'rate': '0.52 %', 'arrow': 'no' },
		{ 'title': '柴油用量', 'summary': '柴油用量(L)', 'big': '52.2 ', 'rate': '0.24 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '百公里油耗', 'summary': '百公里油耗(升/公里)', 'big': '38.43 ', 'rate': '0.064 %', 'arrow': 'no' }],
		"economy": [{ 'title': '二氧化碳排放量', 'summary': '二氧化碳排放量(KG)', 'big': '96.37 ', 'rate': '0.26 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'分宜县平安汽车运输服务有限公司',lon:114.680906,lat:27.826225,icon:'./image/secs/map/mark/id_02.png',type:"traffic",address:"府前路21号"}],
		"energy": [{ 'title': '货物运输', 'summary': '车辆', 'big': '货物运输 ', 'rate': '', 'arrow': '' }],
		"environment": [{ 'title': '汽油用量', 'summary': '汽油用量(L)', 'big': '30.33 ', 'rate': '0.53 %', 'arrow': 'no' },
		{ 'title': '柴油用量', 'summary': '柴油用量(L)', 'big': '52.3 ', 'rate': '0.23 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '百公里油耗', 'summary': '百公里油耗(升/公里)', 'big': '38.45 ', 'rate': '0.067 %', 'arrow': 'no' }],
		"economy": [{ 'title': '二氧化碳排放量', 'summary': '二氧化碳排放量(KG)', 'big': '96.57 ', 'rate': '0.28 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'分宜县明通汽车运输有限公司',lon:114.696644,lat:27.811464,icon:'./image/secs/map/mark/id_02.png',type:"traffic",address:"府前路21号"}],
		"energy": [{ 'title': '货物运输', 'summary': '车辆', 'big': '货物运输 ', 'rate': '', 'arrow': '' }],
		"environment": [{ 'title': '汽油用量', 'summary': '汽油用量(L)', 'big': '30.44 ', 'rate': '0.054 %', 'arrow': 'no' },
		{ 'title': '柴油用量', 'summary': '柴油用量(L)', 'big': '52.4 ', 'rate': '0.24 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '百公里油耗', 'summary': '百公里油耗(升/公里)', 'big': '38.47 ', 'rate': '0.06 %', 'arrow': 'no' }],
		"economy": [{ 'title': '二氧化碳排放量', 'summary': '二氧化碳排放量(KG)', 'big': '96.77 ', 'rate': '0.210 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'分宜县明通汽车运输有限公司',lon:114.645189,lat:27.802006,icon:'./image/secs/map/mark/id_02.png',type:"traffic",address:"府前路21号"}],
		"energy": [{ 'title': '货物运输', 'summary': '车辆', 'big': '货物运输 ', 'rate': '', 'arrow': '' }],
		"environment": [{ 'title': '汽油用量', 'summary': '汽油用量(L)', 'big': '30.55 ', 'rate': '0.055 %', 'arrow': 'no' },
		{ 'title': '柴油用量', 'summary': '柴油用量(L)', 'big': '52.5 ', 'rate': '0.25 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '百公里油耗', 'summary': '百公里油耗(升/公里)', 'big': '38.49 ', 'rate': '0.63 %', 'arrow': 'no' }],
		"economy": [{ 'title': '二氧化碳排放量', 'summary': '二氧化碳排放量(KG)', 'big': '96.97 ', 'rate': '0.212 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'分宜县交通运输局',lon:114.695926,lat:27.82271,icon:'./image/secs/map/mark/id_02.png',type:"traffic",address:"府前路21号"}],
		"energy": [{ 'title': '货物运输', 'summary': '车辆', 'big': '货物运输 ', 'rate': '', 'arrow': '' }],
		"environment": [{ 'title': '汽油用量', 'summary': '汽油用量(L)', 'big': '30.66 ', 'rate': '0.056 %', 'arrow': 'no' },
		{ 'title': '柴油用量', 'summary': '柴油用量(L)', 'big': '52.6 ', 'rate': '0.26 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '百公里油耗', 'summary': '百公里油耗(升/公里)', 'big': '38.411 ', 'rate': '0.66 %', 'arrow': 'no' }],
		"economy": [{ 'title': '二氧化碳排放量', 'summary': '二氧化碳排放量(KG)', 'big': '96.117 ', 'rate': '0.214 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'盛龙汽车运输贸易公司',lon:114.903829,lat:27.786731,icon:'./image/secs/map/mark/id_02.png',type:"traffic",address:"府前路21号"}],
		"energy": [{ 'title': '货物运输', 'summary': '车辆', 'big': '货物运输 ', 'rate': '', 'arrow': '' }],
		"environment": [{ 'title': '汽油用量', 'summary': '汽油用量(L)', 'big': '30.77 ', 'rate': '0.057 %', 'arrow': 'no' },
		{ 'title': '柴油用量', 'summary': '柴油用量(L)', 'big': '52.7 ', 'rate': '0.27 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '百公里油耗', 'summary': '百公里油耗(升/公里)', 'big': '38.413 ', 'rate': '0.69 %', 'arrow': 'no' }],
		"economy": [{ 'title': '二氧化碳排放量', 'summary': '二氧化碳排放量(KG)', 'big': '96.137 ', 'rate': '0.216 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'衡阳铁路运输职业学校江西办事处',lon:114.942205,lat:27.823797,icon:'./image/secs/map/mark/id_02.png',type:"traffic",address:"府前路21号"}],
		"energy": [{ 'title': '货物运输', 'summary': '车辆', 'big': '货物运输 ', 'rate': '', 'arrow': '' }],
		"environment": [{ 'title': '汽油用量', 'summary': '汽油用量(L)', 'big': '30.88 ', 'rate': '0.058 %', 'arrow': 'no' },
		{ 'title': '柴油用量', 'summary': '柴油用量(L)', 'big': '52.8 ', 'rate': '0.28 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '百公里油耗', 'summary': '百公里油耗(升/公里)', 'big': '38.415 ', 'rate': '0.62 %', 'arrow': 'no' }],
		"economy": [{ 'title': '二氧化碳排放量', 'summary': '二氧化碳排放量(KG)', 'big': '96.157 ', 'rate': '0.218 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'新余市交通运输局',lon:114.925964,lat:27.824436,icon:'./image/secs/map/mark/id_02.png',type:"traffic",address:"府前路21号"}],
		"energy": [{ 'title': '货物运输', 'summary': '车辆', 'big': '货物运输 ', 'rate': '', 'arrow': '' }],
		"environment": [{ 'title': '汽油用量', 'summary': '汽油用量(L)', 'big': '30.99 ', 'rate': '0.059 %', 'arrow': 'no' },
		{ 'title': '柴油用量', 'summary': '柴油用量(L)', 'big': '52.9 ', 'rate': '0.29 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '百公里油耗', 'summary': '百公里油耗(升/公里)', 'big': '38.417 ', 'rate': '0.65 %', 'arrow': 'no' }],
		"economy": [{ 'title': '二氧化碳排放量', 'summary': '二氧化碳排放量(KG)', 'big': '96.177 ', 'rate': '0.220 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'新余继恒汽车运输有限公司修理厂',lon:114.925676,lat:27.814723,icon:'./image/secs/map/mark/id_02.png',type:"traffic",address:"府前路21号"}],
		"energy": [{ 'title': '货物运输', 'summary': '车辆', 'big': '货物运输 ', 'rate': '', 'arrow': '' }],
		"environment": [{ 'title': '汽油用量', 'summary': '汽油用量(L)', 'big': '30.10 ', 'rate': '0.51 %', 'arrow': 'no' },
		{ 'title': '柴油用量', 'summary': '柴油用量(L)', 'big': '52.10 ', 'rate': '0.210 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '百公里油耗', 'summary': '百公里油耗(升/公里)', 'big': '38.419 ', 'rate': '0.68 %', 'arrow': 'no' }],
		"economy": [{ 'title': '二氧化碳排放量', 'summary': '二氧化碳排放量(KG)', 'big': '96.197 ', 'rate': '0.222 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'新余市军安运输产业有限公司',lon:114.929557,lat:27.820091,icon:'./image/secs/map/mark/id_02.png',type:"traffic",address:"府前路21号"}],
		"energy": [{ 'title': '货物运输', 'summary': '车辆', 'big': '货物运输 ', 'rate': '', 'arrow': '' }],
		"environment": [{ 'title': '汽油用量', 'summary': '汽油用量(L)', 'big': '30.11 ', 'rate': '0.51 %', 'arrow': 'no' },
		{ 'title': '柴油用量', 'summary': '柴油用量(L)', 'big': '52.11 ', 'rate': '0.211 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '百公里油耗', 'summary': '百公里油耗(升/公里)', 'big': '38.421 ', 'rate': '0.61 %', 'arrow': 'no' }],
		"economy": [{ 'title': '二氧化碳排放量', 'summary': '二氧化碳排放量(KG)', 'big': '96.217 ', 'rate': '0.224 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'新余市汽车运输总公司货运公司',lon:114.957728,lat:27.809994,icon:'./image/secs/map/mark/id_02.png',type:"traffic",address:"府前路21号"}],
		"energy": [{ 'title': '货物运输', 'summary': '车辆', 'big': '货物运输 ', 'rate': '', 'arrow': '' }],
		"environment": [{ 'title': '汽油用量', 'summary': '汽油用量(L)', 'big': '30.12', 'rate': '0.51%', 'arrow': 'no' },
		{ 'title': '柴油用量', 'summary': '柴油用量(L)', 'big': '52.12 ', 'rate': '0.212 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '百公里油耗', 'summary': '百公里油耗(升/公里)', 'big': '38.42 ', 'rate': '0.34 %', 'arrow': 'no' }],
		"economy": [{ 'title': '二氧化碳排放量', 'summary': '二氧化碳排放量(KG)', 'big': '96.237 ', 'rate': '0.226 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'渝水区道路运输管理所城南运政执法大队',lon:114.954566,lat:27.804499,icon:'./image/secs/map/mark/id_02.png',type:"traffic",address:"府前路21号"}],
		"energy": [{ 'title': '货物运输', 'summary': '车辆', 'big': '货物运输 ', 'rate': '', 'arrow': '' }],
		"environment": [{ 'title': '汽油用量', 'summary': '汽油用量(L)', 'big': '30.13 ', 'rate': '0.05 %', 'arrow': 'no' },
		{ 'title': '柴油用量', 'summary': '柴油用量(L)', 'big': '52.13 ', 'rate': '0.213 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '百公里油耗', 'summary': '百公里油耗(升/公里)', 'big': '38.42 ', 'rate': '0.96 %', 'arrow': 'no' }],
		"economy": [{ 'title': '二氧化碳排放量', 'summary': '二氧化碳排放量(KG)', 'big': '96.257 ', 'rate': '0.228 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'新钢运输部',lon:114.938181,lat:27.787498,icon:'./image/secs/map/mark/id_02.png',type:"traffic",address:"府前路21号"}],
		"energy": [{ 'title': '货物运输', 'summary': '车辆', 'big': '货物运输 ', 'rate': '', 'arrow': '' }],
		"environment": [{ 'title': '汽油用量', 'summary': '汽油用量(L)', 'big': '30.14 ', 'rate': '0.54 %', 'arrow': 'no' },
		{ 'title': '柴油用量', 'summary': '柴油用量(L)', 'big': '52.14 ', 'rate': '0.214 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '百公里油耗', 'summary': '百公里油耗(升/公里)', 'big': '38.42 ', 'rate': '0.64 %', 'arrow': 'no' }],
		"economy": [{ 'title': '二氧化碳排放量', 'summary': '二氧化碳排放量(KG)', 'big': '96.277 ', 'rate': '0.230 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'新余市渝水区交通运输局',lon:114.941774,lat:27.812423,icon:'./image/secs/map/mark/id_02.png',type:"traffic",address:"府前路21号"}],
		"energy": [{ 'title': '货物运输', 'summary': '车辆', 'big': '货物运输 ', 'rate': '', 'arrow': '' }],
		"environment": [{ 'title': '汽油用量', 'summary': '汽油用量(L)', 'big': '30.15 ', 'rate': '0.55 %', 'arrow': 'no' },
		{ 'title': '柴油用量', 'summary': '柴油用量(L)', 'big': '52.15 ', 'rate': '0.215 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '百公里油耗', 'summary': '百公里油耗(升/公里)', 'big': '38.42 ', 'rate': '1.3 %', 'arrow': 'no' }],
		"economy": [{ 'title': '二氧化碳排放量', 'summary': '二氧化碳排放量(KG)', 'big': '96.297 ', 'rate': '0.232 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'水西镇客运站',lon:115.041665,lat:27.831719,icon:'./image/secs/map/mark/id_02.png',type:"traffic",address:"府前路21号"}],
		"energy": [{ 'title': '货物运输', 'summary': '车辆', 'big': '货物运输 ', 'rate': '', 'arrow': '' }],
		"environment": [{ 'title': '汽油用量', 'summary': '汽油用量(L)', 'big': '30.16 ', 'rate': '0.56 %', 'arrow': 'no' },
		{ 'title': '柴油用量', 'summary': '柴油用量(L)', 'big': '52.16 ', 'rate': '0.216 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '百公里油耗', 'summary': '百公里油耗(升/公里)', 'big': '38.41 ', 'rate': '0.66 %', 'arrow': 'no' }],
		"economy": [{ 'title': '二氧化碳排放量', 'summary': '二氧化碳排放量(KG)', 'big': '96.317 ', 'rate': '0.234 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'观巢客运站',lon:114.881839,lat:27.894569,icon:'./image/secs/map/mark/id_02.png',type:"traffic",address:"府前路21号"}],
		"energy": [{ 'title': '货物运输', 'summary': '车辆', 'big': '货物运输 ', 'rate': '', 'arrow': '' }],
		"environment": [{ 'title': '汽油用量', 'summary': '汽油用量(L)', 'big': '31.17 ', 'rate': '1.7 %', 'arrow': 'no' },
		{ 'title': '柴油用量', 'summary': '柴油用量(L)', 'big': '52.17 ', 'rate': '0.217 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '百公里油耗', 'summary': '百公里油耗(升/公里)', 'big': '39.4 ', 'rate': '6.49 %', 'arrow': 'no' }],
		"economy": [{ 'title': '二氧化碳排放量', 'summary': '二氧化碳排放量(KG)', 'big': '96.337 ', 'rate': '0.236 %', 'arrow': 'no' }]
        } ,
        //光伏
        {
       	"baseInfo":[{name:'光伏交易市场B区',lon:114.990929,lat:27.846668,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"府前路21号",img:"./image/secs/map/sence/gf0.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.62 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '31 ', 'rate': '0.1 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.435 ', 'rate': '12 %', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.357 ', 'rate': '0.238 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.2 ', 'rate': '0.12 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'光伏路口',lon:114.976269,lat:27.835297,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"府前路21号",img:"./image/secs/map/sence/gf1.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.64 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '31 ', 'rate': '13 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.437 ', 'rate': '13 %', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.377 ', 'rate': '0.240 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.4 ', 'rate': '0.14 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'新余群禾光伏科技有限公司',lon:115.001421,lat:27.843347,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"府前路21号",img:"./image/secs/map/sence/gf2.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.66 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '31 ', 'rate': '21 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.439 ', 'rate': '6.5 %', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.397 ', 'rate': '0.242 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.6 ', 'rate': '0.16 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'奥曼特光伏园',lon:115.004152,lat:27.83683,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"府前路21号",img:"./image/secs/map/sence/gf3.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.68 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '44 ', 'rate': '11 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.441 ', 'rate': '1%', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.417 ', 'rate': '0.244 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.8 ', 'rate': '0.18 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'光伏交易市场A区',lon:114.99136,lat:27.846796,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"府前路23号",img:"./image/secs/map/sence/gf4.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.610 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '33 ', 'rate': '4%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.443 ', 'rate': '4%', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.437 ', 'rate': '0.246 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.10 ', 'rate': '0.110 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'赛维LDK光伏硅科技公司',lon:115.039797,lat:27.875156,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"府前路2号",img:"./image/secs/map/sence/gf5.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.612 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '42 ', 'rate': '4%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.445 ', 'rate': '4%', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.457 ', 'rate': '0.248 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.12 ', 'rate': '0.112 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'中国新余光伏交易市场A区',lon:114.985036,lat:27.846285,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"丁公路761号",img:"./image/secs/map/sence/gf6.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.614 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '43 ', 'rate': '4%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.447 ', 'rate': '4%', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.477 ', 'rate': '0.250 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.14 ', 'rate': '0.114 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'中国新余光伏交易市场展示厅',lon:114.987767,lat:27.845008,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"工业园1号",img:"./image/secs/map/sence/gf7.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.616 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '34 ', 'rate': '4%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.449 ', 'rate': '4%', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.497 ', 'rate': '0.252 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.16 ', 'rate': '0.116 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'赛维LDK光伏硅科技公司氯碱厂',lon:115.025855,lat:27.87043,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"府前路21号",img:"./image/secs/map/sence/gf8.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.618 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '31 ', 'rate': '4%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.451 ', 'rate': '4%', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.517 ', 'rate': '0.254 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.18 ', 'rate': '0.118 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'新余市南国家具有限公司',lon:114.992654,lat:27.83453,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"府前路21号",img:"./image/secs/map/sence/gf9.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.620 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '13 ', 'rate': '4%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.453 ', 'rate': '4%', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.537 ', 'rate': '0.256 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.20 ', 'rate': '0.120 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'恒真新能源',lon:114.98403,lat:27.846924,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"府前路21号",img:"./image/secs/map/sence/gf10.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.622 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '44 ', 'rate': '4%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.455 ', 'rate': '8%', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.557 ', 'rate': '0.258 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.22 ', 'rate': '0.122 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'光伏交易市场B区',lon:114.990929,lat:27.846668,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"府前路21号",img:"./image/secs/map/sence/gf11.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.624 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '66 ', 'rate': '8%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.457 ', 'rate': '8%', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.577 ', 'rate': '0.260 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.24 ', 'rate': '0.124 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'河下光伏监测点',lon:114.868041,lat:27.794017,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"府前路21号",img:"./image/secs/map/sence/gf12.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.626 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '55 ', 'rate': '8%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.459 ', 'rate': '8%', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.597 ', 'rate': '0.262 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.26 ', 'rate': '0.126 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'昌金光伏公司',lon:114.868041,lat:27.794017,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"府前路21号",img:"./image/secs/map/sence/gf13.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.628 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '44 ', 'rate': '8%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.461 ', 'rate': '8%', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.617 ', 'rate': '0.264 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.28 ', 'rate': '0.128 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'仰天光伏有限公司',lon:114.897937,lat:27.84718,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"府前路21号",img:"./image/secs/map/sence/gf14.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.630 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '44 ', 'rate': '8%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.463 ', 'rate': '8%', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.637 ', 'rate': '0.266 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.30 ', 'rate': '0.130 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'孔目光光伏监测点',lon:114.985324,lat:27.865065,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"府前路21号",img:"./image/secs/map/sence/gf15.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.632 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '72 ', 'rate': '8%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.465 ', 'rate': '8%', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.657 ', 'rate': '0.268 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.32 ', 'rate': '0.132 %', 'arrow': 'no' }]
        } ,{
       	"baseInfo":[{name:'江南理工学院',lon:114.985324,lat:27.865065,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"府前路21号",img:"./image/secs/map/sence/gf16.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.634 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '72 ', 'rate': '8%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.467 ', 'rate': '0.06100 %', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.677 ', 'rate': '0.270 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.34 ', 'rate': '0.134 %', 'arrow': 'no' }]
        },{
       	"baseInfo":[{name:'水溪镇光伏监测点',lon:114.985324,lat:27.865065,icon:'./image/secs/map/mark/id_01.png',type:"av",address:"府前路21号",img:"./image/secs/map/sence/gf17.png"}],
		"energy": [{ 'title': '光伏电站', 'summary': '可再生能源', 'big': '光伏电站 ', 'rate': '0.636 %', 'arrow': 'no' }],
		"environment": [{ 'title': '装机容量', 'summary': '装机容量(兆瓦)', 'big': '34 ', 'rate': '8%', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': '常规能源替代总量', 'summary': '常规能源替代总量(万吨标煤)', 'big': '38.469 ', 'rate': '0.06103 %', 'arrow': 'no' }],
		"economy": [{ 'title': '光伏电站效率', 'summary': '光伏电站效率', 'big': '96.697 ', 'rate': '0.272 %', 'arrow': 'no' },
		{ 'title': '光热系统效率', 'summary': '光热系统效率', 'big': '6.36 ', 'rate': '0.136 %', 'arrow': 'no' }]
        },
        //环境
        {
       	"baseInfo":[{name:'抱石公园',lon:114.9343,lat:27.807502,icon:'./image/secs/map/mark/id_03.png',type:"environment",address:"府前路21号",img:'./image/secs/map/images/xybsgy.jpg'}],
		"energy": [{ 'title': '废水总量', 'summary': '废水总量(吨)', 'big': '40.27 ', 'rate': '0.62 %', 'arrow': 'no' },
		{ 'title': '废气总量', 'summary': '废气总量(吨)', 'big': '40.47 ', 'rate': '0.64 %', 'arrow': 'no' },
		{ 'title': '氨氮总量', 'summary': '氨氮总量(吨)', 'big': '40.67 ', 'rate': '0.66 %', 'arrow': 'no' }
		],
		"economy": [
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.3 ', 'rate': '0.23 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': 'NOx强度', 'summary': 'NOx强度', 'big': '38.39 ', 'rate': '0.063 %', 'arrow': 'no' },
		{ 'title': 'COD强度', 'summary': 'COD强度', 'big': '38.59 ', 'rate': '0.065 %', 'arrow': 'no' }
		],
		"environment": [{ 'title': 'PM2.5指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.23 %', 'arrow': 'no' },
			{ 'title': 'PM10指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.25 %', 'arrow': 'no' }
			]
        },{
       	"baseInfo":[{name:'孔目江国家湿地公园',lon:114.948385,lat:27.847371,icon:'./image/secs/map/mark/id_03.png',type:"environment",address:"府前路21号",img:'./image/secs/map/images/xykmjsdgy.jpg'}],
		"energy": [{ 'title': '废水总量', 'summary': '废水总量(吨)', 'big': '40.87 ', 'rate': '0.68 %', 'arrow': 'no' },
		{ 'title': '废气总量', 'summary': '废气总量(吨)', 'big': '40.107 ', 'rate': '0.610 %', 'arrow': 'no' },
		{ 'title': '氨氮总量', 'summary': '氨氮总量(吨)', 'big': '40.127 ', 'rate': '0.612 %', 'arrow': 'no' }
		],
		"economy": [
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.5 ', 'rate': '0.25 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': 'NOx强度', 'summary': 'NOx强度', 'big': '38.79 ', 'rate': '0.067 %', 'arrow': 'no' },
		{ 'title': 'COD强度', 'summary': 'COD强度', 'big': '38.99 ', 'rate': '0.069 %', 'arrow': 'no' }
		],
		"environment": [{ 'title': 'PM2.5指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.27 %', 'arrow': 'no' },
			{ 'title': 'PM10指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.29 %', 'arrow': 'no' }
			]
        },{
       	"baseInfo":[{name:'北湖公园',lon:114.920502,lat:27.830761,icon:'./image/secs/map/mark/id_03.png',type:"environment",address:"府前路21号",img:'./image/secs/map/images/xybhgy.jpg'}],
		"energy": [{ 'title': '废水总量', 'summary': '废水总量(吨)', 'big': '40.147 ', 'rate': '0.614 %', 'arrow': 'no' },
		{ 'title': '废气总量', 'summary': '废气总量(吨)', 'big': '40.167 ', 'rate': '0.616 %', 'arrow': 'no' },
		{ 'title': '氨氮总量', 'summary': '氨氮总量(吨)', 'big': '40.187 ', 'rate': '0.618 %', 'arrow': 'no' }
		],
		"economy": [
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.7 ', 'rate': '0.27 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': 'NOx强度', 'summary': 'NOx强度', 'big': '38.119 ', 'rate': '8%', 'arrow': 'no' },
		{ 'title': 'COD强度', 'summary': 'COD强度', 'big': '38.139 ', 'rate': '8%', 'arrow': 'no' }
		],
		"environment": [{ 'title': 'PM2.5指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.211 %', 'arrow': 'no' },
			{ 'title': 'PM10指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.213 %', 'arrow': 'no' }
			]
        }  ,{
       	"baseInfo":[{name:'高新森林公园',lon:114.983599,lat:27.845455,icon:'./image/secs/map/mark/id_03.png',type:"environment",address:"府前路21号",img:'./image/secs/map/images/xygxslgy.jpg'}],
		"energy": [{ 'title': '废水总量', 'summary': '废水总量(吨)', 'big': '40.207 ', 'rate': '0.620 %', 'arrow': 'no' },
		{ 'title': '废气总量', 'summary': '废气总量(吨)', 'big': '40.227 ', 'rate': '0.622 %', 'arrow': 'no' },
		{ 'title': '氨氮总量', 'summary': '氨氮总量(吨)', 'big': '40.247 ', 'rate': '0.624 %', 'arrow': 'no' }
		],
		"economy": [
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.9 ', 'rate': '0.29 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': 'NOx强度', 'summary': 'NOx强度', 'big': '38.159 ', 'rate': '10.1%', 'arrow': 'no' },
		{ 'title': 'COD强度', 'summary': 'COD强度', 'big': '38.179 ', 'rate': '10.1%', 'arrow': 'no' }
		],
		"environment": [{ 'title': 'PM2.5指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.215 %', 'arrow': 'no' },
			{ 'title': 'PM10指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.217 %', 'arrow': 'no' }
			]
        }  ,{
       	"baseInfo":[{name:'仙女湖景区',lon:114.95241,lat:27.812678,icon:'./image/secs/map/mark/id_03.png',type:"environment",address:"府前路21号",img:'./image/secs/map/images/xyxnhjq.jpg'}],
		"energy": [{ 'title': '废水总量', 'summary': '废水总量(吨)', 'big': '40.267 ', 'rate': '0.626 %', 'arrow': 'no' },
		{ 'title': '废气总量', 'summary': '废气总量(吨)', 'big': '40.287 ', 'rate': '0.628 %', 'arrow': 'no' },
		{ 'title': '氨氮总量', 'summary': '氨氮总量(吨)', 'big': '40.307 ', 'rate': '0.630 %', 'arrow': 'no' }
		],
		"economy": [
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.11 ', 'rate': '0.211 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': 'NOx强度', 'summary': 'NOx强度', 'big': '38.199 ', 'rate': '10.1%', 'arrow': 'no' },
		{ 'title': 'COD强度', 'summary': 'COD强度', 'big': '38.219 ', 'rate': '10.1%', 'arrow': 'no' }
		],
		"environment": [{ 'title': 'PM2.5指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.219 %', 'arrow': 'no' },
			{ 'title': 'PM10指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.221 %', 'arrow': 'no' }
			]
        }  ,{
       	"baseInfo":[{name:'虎头山公园',lon:114.910441,lat:27.808077,icon:'./image/secs/map/mark/id_03.png',type:"environment",address:"府前路21号",img:'./image/secs/map/images/htsgy.jpg'}],
		"energy": [{ 'title': '废水总量', 'summary': '废水总量(吨)', 'big': '40.327 ', 'rate': '0.632 %', 'arrow': 'no' },
		{ 'title': '废气总量', 'summary': '废气总量(吨)', 'big': '40.347 ', 'rate': '0.634 %', 'arrow': 'no' },
		{ 'title': '氨氮总量', 'summary': '氨氮总量(吨)', 'big': '40.367 ', 'rate': '0.636 %', 'arrow': 'no' }
		],
		"economy": [
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.13 ', 'rate': '0.213 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': 'NOx强度', 'summary': 'NOx强度', 'big': '38.239 ', 'rate': '10.1%', 'arrow': 'no' },
		{ 'title': 'COD强度', 'summary': 'COD强度', 'big': '38.259 ', 'rate': '10.1%', 'arrow': 'no' }
		],
		"environment": [{ 'title': 'PM2.5指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.223 %', 'arrow': 'no' },
			{ 'title': 'PM10指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.225 %', 'arrow': 'no' }
			]
        }  ,{
       	"baseInfo":[{name:'公园北村',lon:114.930419,lat:27.808589,icon:'./image/secs/map/mark/id_03.png',type:"environment",address:"府前路21号",img:'./image/secs/map/images/xygybc.jpg'}],
		"energy": [{ 'title': '废水总量', 'summary': '废水总量(吨)', 'big': '40.387 ', 'rate': '0.638 %', 'arrow': 'no' },
		{ 'title': '废气总量', 'summary': '废气总量(吨)', 'big': '40.407 ', 'rate': '0.640 %', 'arrow': 'no' },
		{ 'title': '氨氮总量', 'summary': '氨氮总量(吨)', 'big': '40.427 ', 'rate': '0.642 %', 'arrow': 'no' }
		],
		"economy": [
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.15 ', 'rate': '0.215 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': 'NOx强度', 'summary': 'NOx强度', 'big': '38.279 ', 'rate': '10.1%', 'arrow': 'no' },
		{ 'title': 'COD强度', 'summary': 'COD强度', 'big': '38.299 ', 'rate': '10.1%', 'arrow': 'no' }
		],
		"environment": [{ 'title': 'PM2.5指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.227 %', 'arrow': 'no' },
			{ 'title': 'PM10指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.229 %', 'arrow': 'no' }
			]
        }  ,{
       	"baseInfo":[{name:'抱石公园',lon:114.936312,lat:27.807055,icon:'./image/secs/map/mark/id_03.png',type:"environment",address:"府前路21号",img:'./image/secs/map/images/xybsgy.jpg'}],
		"energy": [{ 'title': '废水总量', 'summary': '废水总量(吨)', 'big': '40.447 ', 'rate': '0.644 %', 'arrow': 'no' },
		{ 'title': '废气总量', 'summary': '废气总量(吨)', 'big': '40.467 ', 'rate': '0.646 %', 'arrow': 'no' },
		{ 'title': '氨氮总量', 'summary': '氨氮总量(吨)', 'big': '40.487 ', 'rate': '0.648 %', 'arrow': 'no' }
		],
		"economy": [
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.17 ', 'rate': '0.217 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': 'NOx强度', 'summary': 'NOx强度', 'big': '38.319 ', 'rate': '10.1%', 'arrow': 'no' },
		{ 'title': 'COD强度', 'summary': 'COD强度', 'big': '38.339 ', 'rate': '0.33 %', 'arrow': 'no' }
		],
		"environment": [{ 'title': 'PM2.5指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.231 %', 'arrow': 'no' },
			{ 'title': 'PM10指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.233 %', 'arrow': 'no' }
			]
        }  ,{
       	"baseInfo":[{name:'龙池墅公园',lon:114.94896,lat:27.797469,icon:'./image/secs/map/mark/id_03.png',type:"environment",address:"府前路21号",img:'./image/secs/map/images/xylcsgy.jpg'}],
		"energy": [{ 'title': '废水总量', 'summary': '废水总量(吨)', 'big': '40.507 ', 'rate': '0.650 %', 'arrow': 'no' },
		{ 'title': '废气总量', 'summary': '废气总量(吨)', 'big': '40.527 ', 'rate': '0.652 %', 'arrow': 'no' },
		{ 'title': '氨氮总量', 'summary': '氨氮总量(吨)', 'big': '40.547 ', 'rate': '0.654 %', 'arrow': 'no' }
		],
		"economy": [
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.19 ', 'rate': '0.219 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': 'NOx强度', 'summary': 'NOx强度', 'big': '38.359 ', 'rate': '0.35 %', 'arrow': 'no' },
		{ 'title': 'COD强度', 'summary': 'COD强度', 'big': '38.379 ', 'rate': '0.67 %', 'arrow': 'no' }
		],
		"environment": [{ 'title': 'PM2.5指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.235 %', 'arrow': 'no' },
			{ 'title': 'PM10指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.237 %', 'arrow': 'no' }
			]
        }  ,{
       	"baseInfo":[{name:'新余学院',lon:115.003434,lat:27.863021,icon:'./image/secs/map/mark/id_03.png',type:"environment",address:"府前路21号",img:'./image/secs/map/images/xyxy.jpg'}],
		"energy": [{ 'title': '废水总量', 'summary': '废水总量(吨)', 'big': '40.567 ', 'rate': '0.656 %', 'arrow': 'no' },
			{ 'title': '废气总量', 'summary': '废气总量(吨)', 'big': '40.587 ', 'rate': '0.658 %', 'arrow': 'no' },
			{ 'title': '氨氮总量', 'summary': '氨氮总量(吨)', 'big': '40.607 ', 'rate': '0.660 %', 'arrow': 'no' }
		],
		"economy": [
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.21 ', 'rate': '0.221 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': 'NOx强度', 'summary': 'NOx强度', 'big': '38.399 ', 'rate': '19 %', 'arrow': 'no' },
		{ 'title': 'COD强度', 'summary': 'COD强度', 'big': '38.419 ', 'rate': '21 %', 'arrow': 'no' }
		],
		"environment": [{ 'title': 'PM2.5指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.239 %', 'arrow': 'no' },
			{ 'title': 'PM10指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.241 %', 'arrow': 'no' }
			]
        }  ,{
       	"baseInfo":[{name:'青山公园',lon:114.66682,lat:27.814979,icon:'./image/secs/map/mark/id_03.png',type:"environment",address:"府前路21号",img:'./image/secs/map/images/qsgy.jpg'}],
		"energy": [{ 'title': '废水总量', 'summary': '废水总量(吨)', 'big': '40.627 ', 'rate': '0.662 %', 'arrow': 'no' },
			{ 'title': '废气总量', 'summary': '废气总量(吨)', 'big': '40.647 ', 'rate': '0.664 %', 'arrow': 'no' },
			{ 'title': '氨氮总量', 'summary': '氨氮总量(吨)', 'big': '40.667 ', 'rate': '0.666 %', 'arrow': 'no' }
		],
		"economy": [
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.23 ', 'rate': '0.223 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': 'NOx强度', 'summary': 'NOx强度', 'big': '38.439 ', 'rate': '6.43 %', 'arrow': 'no' },
		{ 'title': 'COD强度', 'summary': 'COD强度', 'big': '38.459 ', 'rate': '6.45 %', 'arrow': 'no' }
		],
		"environment": [{ 'title': 'PM2.5指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.243 %', 'arrow': 'no' },
			{ 'title': 'PM10指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.245 %', 'arrow': 'no' }
			]
        }  ,{
       	"baseInfo":[{name:'崇庆寺',lon:114.746734,lat:27.842197,icon:'./image/secs/map/mark/id_03.png',type:"environment",address:"府前路21号",img:'./image/secs/map/images/cqs.jpg'}],
		"energy": [{ 'title': '废水总量', 'summary': '废水总量(吨)', 'big': '40.687 ', 'rate': '0.668 %', 'arrow': 'no' },
			{ 'title': '废气总量', 'summary': '废气总量(吨)', 'big': '40.707 ', 'rate': '0.670 %', 'arrow': 'no' },
			{ 'title': '氨氮总量', 'summary': '氨氮总量(吨)', 'big': '40.727 ', 'rate': '0.672 %', 'arrow': 'no' }
		],
		"economy": [
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.25 ', 'rate': '0.225 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': 'NOx强度', 'summary': 'NOx强度', 'big': '38.479 ', 'rate': '4.7 %', 'arrow': 'no' },
		{ 'title': 'COD强度', 'summary': 'COD强度', 'big': '38.499 ', 'rate': '6.9 %', 'arrow': 'no' }
		],
		"environment": [{ 'title': 'PM2.5指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.247 %', 'arrow': 'no' },
			{ 'title': 'PM10指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.249 %', 'arrow': 'no' }
			]
        }  ,{
       	"baseInfo":[{name:'新余魁星阁',lon:114.947954,lat:27.79913,icon:'./image/secs/map/mark/id_03.png',type:"environment",address:"府前路21号",img:'./image/secs/map/images/xykxg.jpg'}],
		"energy": [{ 'title': '废水总量', 'summary': '废水总量(吨)', 'big': '40.747 ', 'rate': '0.674 %', 'arrow': 'no' },
			{ 'title': '废气总量', 'summary': '废气总量(吨)', 'big': '40.767 ', 'rate': '0.676 %', 'arrow': 'no' },
			{ 'title': '氨氮总量', 'summary': '氨氮总量(吨)', 'big': '40.787 ', 'rate': '0.678 %', 'arrow': 'no' }
		],
		"economy": [{ 'title': '室外温度', 'summary': '摄氏度', 'big': '30.52 ', 'rate': '0.05 %', 'arrow': 'no' },
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.27 ', 'rate': '0.227 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': 'NOx强度', 'summary': 'NOx强度', 'big': '38.519 ', 'rate': '11 %', 'arrow': 'no' },
		{ 'title': 'COD强度', 'summary': 'COD强度', 'big': '38.539 ', 'rate': '23 %', 'arrow': 'no' }
		],
		"environment": [{ 'title': 'PM2.5指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.251 %', 'arrow': 'no' },
			{ 'title': 'PM10指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.253 %', 'arrow': 'no' }
			]
        }  ,{
       	"baseInfo":[{name:'新余黄冈学校',lon:114.958087,lat:27.781042,icon:'./image/secs/map/mark/id_03.png',type:"environment",address:"府前路21号",img:'./image/secs/map/images/xyhgxx.jpg'}],
		"energy": [{ 'title': '废水总量', 'summary': '废水总量(吨)', 'big': '40.807 ', 'rate': '0.680 %', 'arrow': 'no' },
			{ 'title': '废气总量', 'summary': '废气总量(吨)', 'big': '40.827 ', 'rate': '0.682 %', 'arrow': 'no' },
			{ 'title': '氨氮总量', 'summary': '氨氮总量(吨)', 'big': '40.847 ', 'rate': '0.684 %', 'arrow': 'no' }
		],
		"economy": [
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.29 ', 'rate': '0.229 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': 'NOx强度', 'summary': 'NOx强度', 'big': '38.559 ', 'rate': '6.5 %', 'arrow': 'no' },
		{ 'title': 'COD强度', 'summary': 'COD强度', 'big': '38.579 ', 'rate': '9.1 %', 'arrow': 'no' }
		],
		"environment": [{ 'title': 'PM2.5指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.255 %', 'arrow': 'no' },
			{ 'title': 'PM10指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.257 %', 'arrow': 'no' }
			]
        }  ,{
       	"baseInfo":[{name:'新余市十三中学',lon:114.89499,lat:27.807247,icon:'./image/secs/map/mark/id_03.png',type:"environment",address:"府前路21号",img:'./image/secs/map/images/xyssszx.jpg'}],
		"energy": [{ 'title': '废水总量', 'summary': '废水总量(吨)', 'big': '40.867 ', 'rate': '0.686 %', 'arrow': 'no' },
			{ 'title': '废气总量', 'summary': '废气总量(吨)', 'big': '40.887 ', 'rate': '0.688 %', 'arrow': 'no' },
			{ 'title': '氨氮总量', 'summary': '氨氮总量(吨)', 'big': '40.907 ', 'rate': '0.690 %', 'arrow': 'no' }
		],
		"economy": [
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.31 ', 'rate': '0.231 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': 'NOx强度', 'summary': 'NOx强度', 'big': '38.599 ', 'rate': '5.9 %', 'arrow': 'no' },
		{ 'title': 'COD强度', 'summary': 'COD强度', 'big': '38.619 ', 'rate': '12 %', 'arrow': 'no' }
		],
		"environment": [{ 'title': 'PM2.5指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.259 %', 'arrow': 'no' },
			{ 'title': 'PM10指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.261 %', 'arrow': 'no' }
			]
        }  ,{
       	"baseInfo":[{name:'彩色石村',lon:114.957225,lat:27.801112,icon:'./image/secs/map/mark/id_03.png',type:"environment",address:"府前路21号",img:'./image/secs/map/images/cssc.jpg'}],
		"energy": [{ 'title': '废水总量', 'summary': '废水总量(吨)', 'big': '40.927 ', 'rate': '0.692 %', 'arrow': 'no' },
			{ 'title': '废气总量', 'summary': '废气总量(吨)', 'big': '40.947 ', 'rate': '0.694 %', 'arrow': 'no' },
			{ 'title': '氨氮总量', 'summary': '氨氮总量(吨)', 'big': '40.967 ', 'rate': '0.696 %', 'arrow': 'no' }
		],
		"economy": [
		{ 'title': '噪声', 'summary': '分贝', 'big': '52.33 ', 'rate': '0.233 %', 'arrow': 'no' }],
		 "capacity": [
		{ 'title': 'NOx强度', 'summary': 'NOx强度', 'big': '38.639 ', 'rate': '11 %', 'arrow': 'no' },
		{ 'title': 'COD强度', 'summary': 'COD强度', 'big': '38.659 ', 'rate': '13 %', 'arrow': 'no' }
		],
		"environment": [{ 'title': 'PM2.5指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.263 %', 'arrow': 'no' },
			{ 'title': 'PM10指数', 'summary': 'PM2.5指数', 'big': '96.37 ', 'rate': '0.265 %', 'arrow': 'no' }
			]
        } 
	];
	initMap();
function initMap(){//地图初始化
	require.config({
        paths: {
            echarts: './UIFrame/static/echarts/path'
        },
        packages: [
            {
                name: 'BMap',
                location: './UIFrame/static/echarts/src',
                main: 'main'
            }
        ]
    });

    require(
    [
        'echarts',
        'BMap',
        'echarts/chart/map'
    ],
	
    function (echarts, BMapExtension) {
        $('#main').css({
            height:$('body').height(),
            width: $('body').width()
        });

        // 初始化地图
        var BMapExt = new BMapExtension($('#main')[0], BMap, echarts,{
            enableMapClick: false
        });
        map = BMapExt.getMap();
        var container = BMapExt.getEchartsContainer();

        var startPoint = {
            x: 114.114129,
            y: 31.550339
        };
		var json = {
				"baseInfo":[{name:'   新   余   市'}],
		        "environment": [
		        	{ 'title': '空气环境质量', 'summary': '空气环境质量', 'big': '2级', 'rate': '达标', 'arrow': 'no' },
                    { 'title': '化学需氧量', 'summary': '化学需氧量(吨)', 'big': '18240', 'rate': '3.54%', 'arrow': 'down' },
                    { 'title': '氨氮', 'summary': '氨氮(吨)', 'big': '1952', 'rate': '6.78%', 'arrow': 'down' },
                    { 'title': '二氧化硫', 'summary': '二氧化硫(吨)', 'big': '43816', 'rate': '7.02%', 'arrow': 'down' },
                    { 'title': '氮氧化物', 'summary': '氮氧化物(吨)', 'big': '26640', 'rate': '4.92%', 'arrow': 'down' },
                    { 'title': '废水总量', 'summary': '废水总量(万吨)', 'big': '7186.46', 'rate': '5.11%', 'arrow': 'down' },
                    { 'title': '废气总量', 'summary': '废气总量(亿标立方米)', 'big': '1046.91', 'rate': '6.5%', 'arrow': 'down' }
                ],
		        "economy": [
		        	{ 'title': '地区生产总值', 'summary': '地区生产总值(亿元)', 'big': '404.9', 'rate': '8%', 'arrow': 'up' },
                    { 'title': '第一产业', 'summary': '第一产业(亿元)', 'big': '24.29', 'rate': '4.6%', 'arrow': 'up' },
                    { 'title': '第二产业', 'summary': '第二产业(亿元)', 'big': '234.03', 'rate': '10.06%', 'arrow': 'up' },
                    { 'title': '第三产业', 'summary': '第三产业(亿元)', 'big': '146.47', 'rate': '5.6%', 'arrow': 'up' },
                    { 'title': '三产结构比', 'summary': '三产结构比', 'big': '', 'rate': '6.0：57.8：36.2', 'arrow': 'no' }
                ],
		        "energy": [
                   { 'title': '万元GDP能耗', 'summary': '万元GDP能耗(吨标煤/万元)', 'big': '0.81', 'rate': '8.3%', 'arrow': 'down' },
                    { 'title': '能耗总量', 'summary': '能耗总量(万吨标煤)', 'big': '741.8', 'rate': '3.1%', 'arrow': 'up' },
                    { 'title': '节能量', 'summary': '节能量(万吨标煤)', 'big': '82.2', 'rate': '2.6%', 'arrow': 'up' }
               		 
                ],
		        "capacity": [
                    { 'title': '原煤总产量', 'summary': '原煤产量(万吨)', 'big': '153.5', 'rate': '3%', 'arrow': 'up' },
                    { 'title': '发电总量', 'summary': '发电总量(亿千瓦时)', 'big': '57.4', 'rate': '4.8%', 'arrow': 'down' },
                    { 'title': '粮食总产量', 'summary': '粮食总产量(万吨)', 'big': '45.7', 'rate': '0.9%', 'arrow': 'up' },
					{ 'title': '水泥总产量', 'summary': '水泥总产量(万吨)', 'big': '309.7', 'rate': '20.3%', 'arrow': 'up' },
					{ 'title': '钢才总产量', 'summary': '钢才总产量(万吨)', 'big': '961.7', 'rate': '5.7%', 'arrow': 'up' },
                    { 'title': '单晶硅总产量', 'summary': '单晶硅总产量(吨)', 'big': '2552', 'rate': '23.6%', 'arrow': 'up' }
                ]
		    };
		
		initData(json);
        var point = new BMap.Point(startPoint.x, startPoint.y);
        var width = screen.width;
       	map.centerAndZoom(point, 5);
        map.enableScrollWheelZoom(false);
        
		map.disableDoubleClickZoom();
		map.disableScrollWheelZoom();
        // 地图自定义样式
        map.setMapStyle({
            styleJson: [
			          {
			                    "featureType": "water",
			                    "elementType": "all",
			                    "stylers": {
			                              "color": "#056197"
			                    }
			          },
			          {
			                    "featureType": "land",
			                    "elementType": "all",
			                    "stylers": {
			                              "color": "#004981"
			                    }
			          },
			          {
			                    "featureType": "boundary",
			                    "elementType": "geometry",
			                    "stylers": {
			                              "color": "#ff9900"
			                    }
			          },
			          {
			                    "featureType": "railway",
			                    "elementType": "all",
			                    "stylers": {
			                              "color": "#34ceff",
			                              "visibility": "off"
			                    }
			          },
			          {
			                    "featureType": "highway",
			                    "elementType": "geometry",
			                    "stylers": {
			                              "color": "#004981"
			                    }
			          },
			          {
			                    "featureType": "highway",
			                    "elementType": "geometry.fill",
			                    "stylers": {
			                              "color": "#029fd4",
			                              "lightness": 1
			                    }
			          },
			          {
			                    "featureType": "highway",
			                    "elementType": "labels",
			                    "stylers": {
			                              "color": "#029fd4",
			                              "visibility": "off"
			                    }
			          },
			          {
			                    "featureType": "arterial",
			                    "elementType": "geometry",
			                    "stylers": {
			                              "color": "#004981"
			                    }
			          },
			          {
			                    "featureType": "arterial",
			                    "elementType": "geometry.fill",
			                    "stylers": {
			                              "color": "#029fd4"
			                    }
			          },
			          {
			                    "featureType": "green",
			                    "elementType": "all",
			                    "stylers": {
			                              "color": "#00ffff",
			                              "visibility": "off"
			                    }
			          },
			          {
			                    "featureType": "subway",
			                    "elementType": "all",
			                    "stylers": {
			                              "visibility": "off"
			                    }
			          },
			          {
			                    "featureType": "manmade",
			                    "elementType": "all",
			                    "stylers": {
			                              "visibility": "off"
			                    }
			          },
			          {
			                    "featureType": "local",
			                    "elementType": "all",
			                    "stylers": {
			                              "color": "#34ceff",
			                              "visibility": "off"
			                    }
			          },
			          {
			                    "featureType": "arterial",
			                    "elementType": "labels",
			                    "stylers": {
			                              "color": "#34ceff",
			                              "visibility": "off"
			                    }
			          },
			          {
			                    "featureType": "boundary",
			                    "elementType": "geometry.fill",
			                    "stylers": {
			                              "color": "#029fd4"
			                    }
			          },
			          {
			                    "featureType": "building",
			                    "elementType": "all",
			                    "stylers": {
			                              "color": "#6aa84f"
			                    }
			          },
			          {
			                    "featureType": "water",
			                    "elementType": "all",
			                    "stylers": {
			                              "color": "#34ceff",
			                              "visibility": "off"
			                    }
			          },{
                       "featureType": "label",
                       "elementType": "all",
                       "stylers": {
                            "visibility": "off"
                       }
                  }
			]
        }); 
	
        option = {
			tooltip:{
				 textStyle : {
					decoration: 'none',
					fontFamily: 'Verdana, sans-serif',
					fontSize: 15
				},	
				 position : function(p) {
					return [p[0]-350, p[1]-200]				 	
				 },
				 backgroundColor : 'rgba(0,0,0,0)', 
				 borderColor : '#1799D7',
				 formatter: function (params,ticket,callback) {
				   var type = params.seriesName;	
				   if(type=='choose'){
						var name = params.data.name;
						var x = params.data.x;
						var y = params.data.y;
						return '<div id="hover-window" style="font-family:Microsoft YaHei;"><h2 style="background-color:#1799D7;font-weight:bolder;text-align:center;line-height:35px;height:35px;">新 &nbsp;余&nbsp;市</h2><ul>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px"><span style="text-align:right;width:120px;display:inline-block;">上半年GDP:</span><span style="width:90px;margin-left:10px;display:inline-block;">845.07</span><span style="width:100px;display:inline-block;">亿元</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px"><span style="text-align:right;width:120px;display:inline-block;">PM2.5达标:</span><span style="width:90px;margin-left:10px;display:inline-block;">312</span><span style="width:100px;display:inline-block;">天</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px"><span style="text-align:right;width:120px;display:inline-block;">能耗总量:</span><span style="width:90px;margin-left:10px;display:inline-block;">263</span><span style="width:100px;display:inline-block;">万吨标煤</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px"><span style="text-align:right;width:120px;display:inline-block;">万元GDP能耗:</span><span style="width:90px;margin-left:10px;display:inline-block;">0.869</span><span style="width:100px;display:inline-block;">吨标煤/万元</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px"><span style="text-align:right;width:120px;display:inline-block;">化学需氧量:</span><span style="width:90px;margin-left:10px;display:inline-block;">2347.6</span><span style="width:100px;display:inline-block;">吨</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px"><span style="text-align:right;width:120px;display:inline-block;">氨氮:</span><span style="width:90px;margin-left:10px;display:inline-block;">238</span><span style="width:100px;display:inline-block;">吨</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px"><span style="text-align:right;width:120px;display:inline-block;">二氧化硫:</span><span style="width:90px;margin-left:10px;display:inline-block;">2066.4</span><span style="width:100px;display:inline-block;">吨</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:35px;line-height:25px"><span style="text-align:right;width:120px;display:inline-block;">氮氧化物:</span><span style="width:90px;margin-left:10px;display:inline-block;">2046.4</span><span style="width:100px;display:inline-block;">吨</span></li>'
						+'</ul><br/></div>';
					}else{
						return '';
					}	
				 }
			},
            color: ['white','white','gold'],
            series : [{
            name:'北京',
            type:'map',
            mapType: 'none',
            data:[],
            geoCoord: {
                '上海': [121.4648,31.2891],
                '东莞': [113.8953,22.901],
                '东营': [118.7073,37.5513],
                '中山': [113.4229,22.478],
                '临汾': [111.4783,36.1615],
                '临沂': [118.3118,35.2936],
                '丹东': [124.541,40.4242],
                '丽水': [119.5642,28.1854],
                '乌鲁木齐': [87.9236,43.5883],
                '佛山': [112.8955,23.1097],
                '保定': [115.0488,39.0948],
                '兰州': [103.5901,36.3043],
                '包头': [110.3467,41.4899],
                '北京': [116.4551,40.2539],
                '北海': [109.314,21.6211],
                '南京': [118.8062,31.9208],
                '南宁': [108.479,23.1152],
                '南昌': [116.0046,28.6633],
                '南通': [121.1023,32.1625],
                '厦门': [118.1689,24.6478],
                '台州': [121.1353,28.6688],
                '合肥': [117.29,32.0581],
                '呼和浩特': [111.4124,40.4901],
                '咸阳': [108.4131,34.8706],
                '哈尔滨': [127.9688,45.368],
                '唐山': [118.4766,39.6826],
                '嘉兴': [120.9155,30.6354],
                '大同': [113.7854,39.8035],
                '大连': [122.2229,39.4409],
                '天津': [117.4219,39.4189],
                '太原': [112.3352,37.9413],
                '威海': [121.9482,37.1393],
                '宁波': [121.5967,29.6466],
                '宝鸡': [107.1826,34.3433],
                '宿迁': [118.5535,33.7775],
                '常州': [119.4543,31.5582],
                '广州': [113.5107,23.2196],
                '廊坊': [116.521,39.0509],
                '延安': [109.1052,36.4252],
                '张家口': [115.1477,40.8527],
                '徐州': [117.5208,34.3268],
                '德州': [116.6858,37.2107],
                '惠州': [114.6204,23.1647],
                '成都': [103.9526,30.7617],
                '扬州': [119.4653,32.8162],
                '承德': [117.5757,41.4075],
                '拉萨': [91.1865,30.1465],
                '无锡': [120.3442,31.5527],
                '日照': [119.2786,35.5023],
                '昆明': [102.9199,25.4663],
                '杭州': [119.5313,29.8773],
                '枣庄': [117.323,34.8926],
                '柳州': [109.3799,24.9774],
                '株洲': [113.5327,27.0319],
                '武汉': [114.3896,30.6628],
                '汕头': [117.1692,23.3405],
                '江门': [112.6318,22.1484],
                '沈阳': [123.1238,42.1216],
                '沧州': [116.8286,38.2104],
                '河源': [114.917,23.9722],
                '泉州': [118.3228,25.1147],
                '泰安': [117.0264,36.0516],
                '泰州': [120.0586,32.5525],	
                '新余市': [114.924095,27.823541],
                '济南': [117.1582,36.8701],
                '济宁': [116.8286,35.3375],
                '海口': [110.3893,19.8516],
                '淄博': [118.0371,36.6064],
                '淮安': [118.927,33.4039],
                '深圳': [114.5435,22.5439],
                '清远': [112.9175,24.3292],
                '温州': [120.498,27.8119],
                '渭南': [109.7864,35.0299],
                '湖州': [119.8608,30.7782],
                '湘潭': [112.5439,27.7075],
                '滨州': [117.8174,37.4963],
                '潍坊': [119.0918,36.524],
                '烟台': [120.7397,37.5128],
                '玉溪': [101.9312,23.8898],
                '珠海': [113.7305,22.1155],
                '盐城': [120.2234,33.5577],
                '盘锦': [121.9482,41.0449],
                '石家庄': [114.4995,38.1006],
                '福州': [119.4543,25.9222],
                '秦皇岛': [119.2126,40.0232],
                '绍兴': [120.564,29.7565],
                '聊城': [115.9167,36.4032],
                '肇庆': [112.1265,23.5822],
                '舟山': [122.2559,30.2234],
                '苏州': [120.6519,31.3989],
                '莱芜': [117.6526,36.2714],
                '菏泽': [115.6201,35.2057],
                '营口': [122.4316,40.4297],
                '葫芦岛': [120.1575,40.578],
                '衡水': [115.8838,37.7161],
                '衢州': [118.6853,28.8666],
                '西宁': [101.4038,36.8207],
                '西安': [109.1162,34.2004],
                '贵阳': [106.6992,26.7682],
                '连云港': [119.1248,34.552],
                '邢台': [114.8071,37.2821],
                '邯郸': [114.4775,36.535],
                '郑州': [113.4668,34.6234],
                '鄂尔多斯': [108.9734,39.2487],
                '重庆': [107.7539,30.1904],
                '金华': [120.0037,29.1028],
                '铜川': [109.0393,35.1947],
                '银川': [106.3586,38.1775],
                '镇江': [119.4763,31.9702],
                '长春': [125.8154,44.2584],
                '长沙': [113.0823,28.2568],
                '长治': [112.8625,36.4746],
                '阳泉': [113.4778,38.0951],
                '青岛': [120.4651,36.3373],
                '韶关': [113.7964,24.7028]
            },
                    markPoint : {
                        symbol:'diamond',
                        symbolSize : function (v){
                            return 1;
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                            {name:'上海', value:10},
							{name:'东莞', value:10},
							{name:'东营', value:10},
							{name:'中山', value:10},
							{name:'临汾', value:10},
							{name:'临沂', value:10},
							{name:'丹东', value:10},
							{name:'丽水', value:10},
							{name:'乌鲁木齐', value:10},
							{name:'佛山', value:10},
							{name:'保定', value:10},
							{name:'兰州', value:10},
							{name:'包头', value:10},
							{name:'南京', value:10},
							{name:'南宁', value:10},
							{name:'南昌', value:10},
							{name:'南通', value:10},
							{name:'厦门', value:10},
							{name:'台州', value:10},
							{name:'合肥', value:10},
							{name:'呼和浩特', value:10},
							{name:'咸阳', value:10},
							{name:'哈尔滨', value:10},
							{name:'唐山', value:10},
							{name:'嘉兴', value:10},
							{name:'大同', value:10},
							{name:'大连', value:10},
							{name:'天津', value:10},
							{name:'威海', value:10},
							{name:'宁波', value:10},
							{name:'宝鸡', value:10},
							{name:'宿迁', value:10},
							{name:'广州', value:10},
							{name:'廊坊', value:10},
							{name:'延安', value:10},
							{name:'张家口', value:10},
							{name:'徐州', value:10},
							{name:'德州', value:10},
							{name:'惠州', value:10},
							{name:'扬州', value:10},
							{name:'承德', value:10},
							{name:'拉萨', value:10},
							{name:'无锡', value:10},
							{name:'日照', value:10},
							{name:'昆明', value:10},
							{name:'杭州', value:10},
							{name:'枣庄', value:10},
							{name:'柳州', value:10},
							{name:'株洲', value:10},
							{name:'武汉', value:10},
							{name:'汕头', value:10},
							{name:'江门', value:10},
							{name:'沈阳', value:10},
							{name:'沧州', value:10},
							{name:'河源', value:10},
							{name:'泉州', value:10},
							{name:'泰安', value:10},
							{name:'泰州', value:10},
							{name:'济南', value:10},
							{name:'济宁', value:10},
							{name:'淄博', value:10},
							{name:'淮安', value:10},
							{name:'深圳', value:10},
							{name:'清远', value:10},
							{name:'温州', value:10},
							{name:'渭南', value:10},
							{name:'湖州', value:10},
							{name:'湘潭', value:10},
							{name:'滨州', value:10},
							{name:'潍坊', value:10},
							{name:'烟台', value:10},
							{name:'玉溪', value:10},
							{name:'珠海', value:10},
							{name:'盐城', value:10},
							{name:'盘锦', value:10},
							{name:'石家庄', value:10},
							{name:'秦皇岛', value:10},
							{name:'绍兴', value:10},
							{name:'聊城', value:10},
							{name:'肇庆', value:10},
							{name:'舟山', value:10},
							{name:'苏州', value:10},
							{name:'莱芜', value:10},
							{name:'菏泽', value:10},
							{name:'营口', value:10},
							{name:'葫芦岛', value:10},
							{name:'衡水', value:10},
							{name:'衢州', value:10},
							{name:'西宁', value:10},
							{name:'贵阳', value:10},
							{name:'连云港', value:10},
							{name:'邢台', value:10},
							{name:'邯郸', value:10},
							{name:'郑州', value:10},
							{name:'鄂尔多斯', value:10},
							{name:'金华', value:10},
							{name:'铜川', value:10},
							{name:'银川', value:10},
							{name:'镇江', value:10},
							{name:'长春', value:10},
							{name:'长沙', value:10},
							{name:'长治', value:10},
							{name:'阳泉', value:10},
							{name:'青岛', value:10},
							{name:'韶关', value:10}
                        ]
                    }

                },
				{
                    name:'other',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markPoint : {
                        symbol:'circle',
                        symbolSize : function (v){
                            return 4
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
                            {name:'福州',value:95},
                            {name:'太原',value:90},
                            {name:'重庆',value:70},
                            {name:'西安',value:60},
                            {name:'成都',value:50},
                            {name:'常州',value:40},
                            {name:'北京',value:30},
                            {name:'北海',value:20},
                            {name:'海口',value:10}
                        ]
                    }
                },
					{
                    name:'choose',
                    type:'map',
                    mapType: 'none',
                    data:[],
                    markPoint : {
                        symbol:'circle',
                        symbolSize : function (v){
                            return 5
                        },
                        effect : {
                            show: true,
                            shadowBlur : 0
                        },
						
                        itemStyle:{
                            normal:{
                                label:{show:false}
                            }
                        },
                        data : [
							{name:'新余市',value:0}
                        ]
                    }
                },
                {
                    name:'全国',
                    type:'map',
                    mapType: 'none',
                    data:[]
                  
                }
            ]
        };

        var myChart = BMapExt.initECharts(container);
        window.onresize = myChart.onresize;
        BMapExt.setOption(option,true);
		function eConsole(param) {
			//alert(JSON.stringify(param));
			//if(param.seriesName!='choose'){//所有点都可以点击进入到新余
			//	return;
			//}
			//$('.fastgo button').removeClass('active');
			//$('.fastgo .industry-btn').addClass('active');
	
			//初始化模板选择的下拉框
			map = new BMap.Map("main");
			
		//	window.map = map;
			var point = new BMap.Point(114.961141,27.804905);
			map.disable3DBuilding();
			//map.disableDoubleClickZoom();//禁用双击放大地图
			map.centerAndZoom(point, 14); 
			++jzcs;
			if(jzcs==1){
				$(".add_btn").append("<a onclick='add();'><img src='./js/ccs/easyui/themes/icons/edit_add.png'/></a>");
				$(".fa-list-alt1").empty();	
				$(".fa-list-alt1").append("数据总览");	
			}
			
			document.getElementById("btn-type1").style.display="";
			document.getElementById("btn-type2").style.display="";
			document.getElementById("monitoring-point-data").style.display='none';
			document.getElementById("point-data-inner").style.display='';
			//initData(nodes[0]);
			var width = screen.width;
			if(width=='1366' || width=='1280'){
				$(".data-files ul li").css("height","108px");
				$(".data-number ul li").css("height","25px");
				$(".map-tool-bar").css("left","20px");
				$(".map-tool-bar").css("bottom","200px");
				$("#point-data-inner span").css("height","1px");
				$("#sptitle1").css("height","85px");
				$("#sptitle1").css("line-height","75px");
				$("#sptitle2").css("height","58px");
				$("#sptitle2").css("line-height","60px");
			}else if(width=='1920'){
				$(".data-files ul li").css("height","145px");
				$(".data-number ul li").css("height","45px");
				$(".map-tool-bar").css("left","240px");
				$(".map-tool-bar").css("bottom","250px");
				$("#ulid span").css("height","45px");
				
			}
			
			for(var i=0;i<nodes.length;i++){//加载前35个工业点
				var pt = new BMap.Point(nodes[i].baseInfo[0].lon,nodes[i].baseInfo[0].lat);
				var myIcon = new BMap.Icon(nodes[i].baseInfo[0].icon, new BMap.Size(27,27));
				var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
				marker2.token = nodes[i];
				map.addOverlay(marker2);   
				var py="";
				var type="";
				if(nodes[i].baseInfo[0].type=='traffic'){
					type='交通';
					py='jt';
				}else if(nodes[i].baseInfo[0].type=='light'){
					type='路灯';
					py='ld';
				}else if(nodes[i].baseInfo[0].type=='building'){
					type='建筑';
					py='jz';
				}else if(nodes[i].baseInfo[0].type=='av'){
					type='光伏';
					py='gf';
				}else if(nodes[i].baseInfo[0].type=='environment'){
					type='环境';
					py='hj';
				}else if(nodes[i].baseInfo[0].type=='industrial'){
					type='工业';
					py='gy';
				}
				addClickHandler(nodes,i,marker2,type,py);
			}	
		
			
			function addClickHandler(nodes,i,marker,type,py){
				marker.addEventListener("mouseover",function(e){
					var tst = this.token;
					var html = '';
					//alert(JSON.stringify(tst.energy[0]));
					if(py=='gy'|| py=='gf'||py=='hj'){
						var lable1=new Object();
						lable1["name"] = tst.energy[0].title;
						lable1["val"] = tst.energy[0].big;
						lable1["un"] = tst.energy[0].summary;
						
						
						var lable2=new Object();
						lable2["name"] = tst.environment[0].title;
						lable2["val"] = tst.environment[0].big;
						lable2["un"] = tst.environment[0].summary;
						
						var lable3=new Object();
						lable3["name"] = tst.economy[0].title;
						lable3["val"] = tst.economy[0].big;
						lable3["un"] = tst.economy[0].summary;
						
						
						html = ['<div id="hover-window11" style="font-family:Microsoft YaHei"><h3 style="background-color:#1799D7;font-weight:bolder;text-align:center;line-height:25px;height:25px">'+tst.baseInfo[0].name+'</h3>'
						+'<img src="'+tst.baseInfo[0].img+'" width="310" height="130" /><ul>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">地址:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+tst.baseInfo[0].address+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">类型:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+type+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable1.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable1.val+'</span><span style="width:100px;display:inline-block;">'+lable1.un+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable2.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable2.val+'</span><span style="width:100px;display:inline-block;">'+lable2.un+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable3.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable3.val+'</span></span><span style="width:100px;display:inline-block;">'+lable3.un+'</span></li>'
						+'</ul></div>'];
						infoBox = new BMapLib.InfoBox(map,html.join(""),{
									boxStyle:{
										//background:"url('./image/secs/map/btn/tipbox.gif') no-repeat center top"
										width: "310px"
										,height: "300px"
									}
									,closeIconMargin: "0px 0px 0 0"
									,enableAutoPan: true
									,align: INFOBOX_AT_TOP
								});
					}else if(py=='ld'){
						var lable1=new Object();
						lable1["name"] = tst.environment[0].title;
						lable1["val"] = tst.environment[0].big;
						lable1["un"] = tst.environment[0].summary;
						
						
						var lable2=new Object();
						lable2["name"] = tst.environment[1].title;
						lable2["val"] = tst.environment[1].big;
						lable2["un"] = tst.environment[1].summary;
						
						var lable3=new Object();
						lable3["name"] = tst.environment[2].title;
						lable3["val"] = tst.environment[2].big;
						lable3["un"] = tst.environment[2].summary;		
						
						var lable4=new Object();
						lable4["name"] = tst.economy[0].title;
						lable4["val"] = tst.economy[0].big;
						lable4["un"] = tst.economy[0].summary;		
						
						var lable5=new Object();
						lable5["name"] = tst.capacity[0].title;
						lable5["val"] = tst.capacity[0].big;
						lable5["un"] = tst.capacity[0].summary;		
					
						html = ['<div id="hover-window11" style="font-family:Microsoft YaHei"><h3 style="background-color:#1799D7;font-weight:bolder;text-align:center;line-height:25px;height:25px">'+nodes[i].baseInfo[0].name+'</h3>'
						+'<ul>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">道路:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+tst.baseInfo[0].address+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">类型:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+type+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable1.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable1.val+'</span><span style="width:100px;display:inline-block;">'+'万千瓦时'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable2.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable2.val+'</span><span style="width:100px;display:inline-block;">'+'万千瓦时'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable3.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable3.val+'</span><span style="width:100px;display:inline-block;">'+'万千瓦时'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable4.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable4.val+'</span><span style="width:100px;display:inline-block;">'+'盏'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable5.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable5.val+'</span></span><span style="width:100px;display:inline-block;">'+'w/m2'+'</span></li>'
						+'</ul></div>'];
						infoBox = new BMapLib.InfoBox(map,html.join(""),{
									boxStyle:{
										//background:"url('./image/secs/map/btn/tipbox.gif') no-repeat center top"
										width: "310px"
										,height: "220px"
									}
									,closeIconMargin: "0px 0px 0 0"
									,enableAutoPan: true
									,align: INFOBOX_AT_TOP
								});
					}else if(py=='jt'){
						var lable1=new Object();
						lable1["name"] = tst.energy[0].title;
						lable1["val"] = tst.energy[0].big;
						lable1["un"] = tst.energy[0].summary;
						
						
						var lable2=new Object();
						lable2["name"] = tst.environment[0].title;
						lable2["val"] = tst.environment[0].big;
						lable2["un"] = tst.environment[0].summary;
						
						var lable3=new Object();
						lable3["name"] = tst.capacity[0].title;
						lable3["val"] = tst.capacity[0].big;
						lable3["un"] = tst.capacity[0].summary;	
						
						var lable4=new Object();
						lable4["name"] = tst.economy[0].title;
						lable4["val"] = tst.economy[0].big;
						lable4["un"] = tst.economy[0].summary;				
					
						html = ['<div id="hover-window11" style="font-family:Microsoft YaHei"><h3 style="background-color:#1799D7;font-weight:bolder;text-align:center;line-height:25px;height:25px">'+tst.baseInfo[0].name+'</h3>'
						+'<ul>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">地址:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+tst.baseInfo[0].address+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">类型:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+type+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">用途:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+lable1.name+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable2.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable2.val+'</span><span style="width:100px;display:inline-block;">'+'升'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable3.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable3.val+'</span><span style="width:100px;display:inline-block;">'+'升/公里'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable4.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable4.val+'</span><span style="width:100px;display:inline-block;">'+'千克'+'</span></li>'
						+'</ul></div>'];
						infoBox = new BMapLib.InfoBox(map,html.join(""),{
									boxStyle:{
										//background:"url('./image/secs/map/btn/tipbox.gif') no-repeat center top"
										width: "310px"
										,height: "180px"
									}
									,closeIconMargin: "0px 0px 0 0"
									,enableAutoPan: true
									,align: INFOBOX_AT_TOP
								});
					}else if(py=='jz'){
						var lable1=new Object();
						lable1["name"] = tst.energy[0].title;
						lable1["val"] = tst.energy[0].big;
						lable1["un"] = tst.energy[0].summary;
						
						
						var lable2=new Object();
						lable2["name"] = tst.energy[1].title;
						lable2["val"] = tst.energy[1].big;
						lable2["un"] = tst.energy[1].summary;
						
						var lable3=new Object();
						lable3["name"] = tst.energy[2].title;
						lable3["val"] = tst.energy[2].big;
						lable3["un"] = tst.energy[2].summary;
						
						var lable4=new Object();
						lable4["name"] = tst.economy[0].title;
						lable4["val"] = tst.economy[0].big;
						lable4["un"] = tst.economy[0].summary;
						
						var lable5=new Object();
						lable5["name"] = tst.economy[1].title;
						lable5["val"] = tst.economy[1].big;
						lable5["un"] = tst.economy[1].summary;
						
						
						html = ['<div id="hover-window11" style="font-family:Microsoft YaHei"><h3 style="background-color:#1799D7;font-weight:bolder;text-align:center;line-height:25px;height:25px">'+tst.baseInfo[0].name+'</h3>'
						+'<img src="'+tst.baseInfo[0].img+'" width="310" height="130" /><ul>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">地址:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+tst.baseInfo[0].address+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">类型:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+type+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable1.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable1.val+'</span><span style="width:100px;display:inline-block;">'+'吨标煤'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable2.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable2.val+'</span><span style="width:100px;display:inline-block;">'+'万千瓦时'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable3.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable3.val+'</span><span style="width:100px;display:inline-block;">'+'千立方米'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable4.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable4.val+'</span><span style="width:100px;display:inline-block;">'+'千瓦时/人'+'</span></li>'
						+'</ul></div>'];
						infoBox = new BMapLib.InfoBox(map,html.join(""),{
									boxStyle:{
										//background:"url('./image/secs/map/btn/tipbox.gif') no-repeat center top"
										width: "310px"
										,height: "320px"
									}
									,closeIconMargin: "0px 0px 0 0"
									,enableAutoPan: true
									,align: INFOBOX_AT_TOP
								});
					}				
					infoBox.open(marker);}
				);
				marker.addEventListener("mouseout",function(e){
					infoBox.close();}
				);
				marker.addEventListener("click",function(e){
					var tst = this.token;
					if(tst.baseInfo[0].type=='industrial'){//
						$("#tl1").removeClass().addClass("index-energy").addClass("left");
						$("#tl2").removeClass().addClass("index-environment").addClass("left");
						$("#tl3").removeClass().addClass("index-capacity").addClass("left");
						$("#tl4").removeClass().addClass("index-economy").addClass("left");
					}else if(tst.baseInfo[0].type=='light'){
						$("#tl1").removeClass().addClass("index-zm1").addClass("left");
						$("#tl2").removeClass().addClass("index-zm2").addClass("left");
						$("#tl3").removeClass().addClass("index-zm3").addClass("left");
						$("#tl4").removeClass().addClass("index-zm4").addClass("left");
					}else if(tst.baseInfo[0].type=='av'){
						$("#tl1").removeClass().addClass("index-kzs1").addClass("left");
						$("#tl2").removeClass().addClass("index-kzs2").addClass("left");
						$("#tl3").removeClass().addClass("index-kzs3").addClass("left");
						$("#tl4").removeClass().addClass("index-kzs4").addClass("left");
					}else if(tst.baseInfo[0].type=='building'){
						$("#tl1").removeClass().addClass("index-jz1").addClass("left");
						$("#tl2").removeClass().addClass("index-jz2").addClass("left");
						$("#tl3").removeClass().addClass("index-jz3").addClass("left");
						$("#tl4").removeClass().addClass("index-jz4").addClass("left");
					}else if(tst.baseInfo[0].type=='environment'){
						$("#tl1").removeClass().addClass("index-hj1").addClass("left");
						$("#tl2").removeClass().addClass("index-hj2").addClass("left");
						$("#tl3").removeClass().addClass("index-hj3").addClass("left");
						$("#tl4").removeClass().addClass("index-hj4").addClass("left");
					}else if(tst.baseInfo[0].type=='traffic'){
						$("#tl1").removeClass().addClass("index-jt1").addClass("left");
						$("#tl2").removeClass().addClass("index-jt2").addClass("left");
						$("#tl3").removeClass().addClass("index-jt3").addClass("left");
						$("#tl4").removeClass().addClass("index-jt4").addClass("left");
					}
					
					
					initData(tst);
					
				});
				marker.addEventListener("dblclick",function(e){
					var tst = this.token;
					if(basePath){
						var url = basePath+"xmlPaneAction.action?fileName=secs/ss/analyse-enterprice-xinyu&viewName=main&id=34";
						
						//title, url, height, width, id,img,precent
						var diag = _lstGetDialogFromUrl("基本信息",url);
						diag.ID = "diag_marker";
						diag.Title = tst.baseInfo[0].name;
						diag.Width= 1000;
						diag.Height='100';
						diag.show();
					}
					//var url = "xmlPaneAction.action?fileName=secs/ss/analyse-enterprice-xinyu&viewName=main&id=34";
					//_lstViewRow('secs/ss/analyse-enterprice-xinyu', 'code', '新余钢铁', 'main', '&id=' + 34);
				});
			}
			map.setMapStyle({
            styleJson: [
			          {
			                    "featureType": "water",
			                    "elementType": "all",
			                    "stylers": {
			                              "color": "#056197"
			                    }
			          },
			          {
			                    "featureType": "land",
			                    "elementType": "all",
			                    "stylers": {
			                              "color": "#004981"
			                    }
			          },
			          {
			                    "featureType": "boundary",
			                    "elementType": "geometry",
			                    "stylers": {
			                              "color": "#ff9900"
			                    }
			          },
			          {
			                    "featureType": "railway",
			                    "elementType": "all",
			                    "stylers": {
			                              "color": "#34ceff",
			                              "visibility": "off"
			                    }
			          },
			          {
			                    "featureType": "highway",
			                    "elementType": "geometry",
			                    "stylers": {
			                              "color": "#004981"
			                    }
			          },
			          {
			                    "featureType": "highway",
			                    "elementType": "geometry.fill",
			                    "stylers": {
			                              "color": "#029fd4",
			                              "lightness": 1
			                    }
			          },
			          {
			                    "featureType": "highway",
			                    "elementType": "labels",
			                    "stylers": {
			                              "color": "#029fd4",
			                              "visibility": "off"
			                    }
			          },
			          {
			                    "featureType": "arterial",
			                    "elementType": "geometry",
			                    "stylers": {
			                              "color": "#004981"
			                    }
			          },
			          {
			                    "featureType": "arterial",
			                    "elementType": "geometry.fill",
			                    "stylers": {
			                              "color": "#029fd4"
			                    }
			          },{
		                       "featureType": "poi",
		                       "elementType": "all",
		                       "stylers": {
		                            "visibility": "off"
		                       }
		              },
			          {
			                    "featureType": "green",
			                    "elementType": "all",
			                    "stylers": {
			                              "color": "#00ffff",
			                              "visibility": "off"
			                    }
			          },
			          {
			                    "featureType": "subway",
			                    "elementType": "all",
			                    "stylers": {
			                              "visibility": "off"
			                    }
			          },
			          {
			                    "featureType": "manmade",
			                    "elementType": "all",
			                    "stylers": {
			                              "visibility": "off"
			                    }
			          },
			          {
			                    "featureType": "local",
			                    "elementType": "all",
			                    "stylers": {
			                              "color": "#34ceff",
			                              "visibility": "off"
			                    }
			          },
			          {
			                    "featureType": "arterial",
			                    "elementType": "labels",
			                    "stylers": {
			                              "color": "#34ceff",
			                              "visibility": "off"
			                    }
			          },
			          {
			                    "featureType": "boundary",
			                    "elementType": "geometry.fill",
			                    "stylers": {
			                              "color": "#029fd4"
			                    }
			          },
			          {
			                    "featureType": "building",
			                    "elementType": "all",
			                    "stylers": {
			                              "color": "#6aa84f"
			                    }
			          },
			          {
			                    "featureType": "water",
			                    "elementType": "all",
			                    "stylers": {
			                              "color": "#34ceff",
			                              "visibility": "off"
			                    }
			          },{
		                       "featureType": "label",
		                       "elementType": "all",
		                       "stylers": {
		                            "visibility": "off"
		                       }
		                  }
			]
        }); 
		   
        }
		var ecConfig = require('echarts/config');
		myChart.on(ecConfig.EVENT.HOVER);
		myChart.on(ecConfig.EVENT.CLICK,eConsole);
    }
);
}	
$(".sub-sys-in button").click(function(){
	var clazz = this.className;
	if(this.className=='industry-btn'){//工业
		window.open("system/system/action/system!selectSystem.action?onlyOneSystem=true&system.id=540",'','','','');
	}else if(this.className=='building-btn'){//建筑
		window.open("http://117.41.184.76:8080/supervise/pem/index.jsp",'','','','');
	}else if(this.className=='environment-btn'){
		var url = basePath+"xmlPaneAction.action?fileName=secs/common/closetime&viewName=edit&targetFileName=secs/ss/hjkhzb";
		//title, url, height, width, id,img,precent
		window.open(url,'','','','');
	}else if(this.className=='av-btn'){
		var url = basePath+"xmlPaneAction.action?fileName=secs/common/closetime&viewName=edit&targetFileName=secs/ss/kzsnyyyzbView";
		//title, url, height, width, id,img,precent
		window.open(url,'','','','');
	}else if(this.className=='light-btn'){
		var url = basePath+"xmlPaneAction.action?fileName=secs/common/closetime&viewName=edit&targetFileName=secs/ss/cszmnhzbView";
		//title, url, height, width, id,img,precent
		window.open(url,'','','','');
	}else if(this.className=='traffic-btn'){
		var url = basePath+"xmlPaneAction.action?fileName=secs/common/closetime&viewName=edit&targetFileName=secs/ss/jtysnhzbView";
		//title, url, height, width, id,img,precent
		window.open(url,'','','','');
	}
	this.className=clazz;
});


$(".fastgo button").click(function(){
	map.clearOverlays(); 
	if(this.className=='industry-btn'){//工业
			for(var i=0;i<nodes.length;i++){
				if(nodes[i].baseInfo[0].type=='industrial'){
					
					var pt = new BMap.Point(nodes[i].baseInfo[0].lon,nodes[i].baseInfo[0].lat);
					var myIcon = new BMap.Icon(nodes[i].baseInfo[0].icon, new BMap.Size(27,27));
					var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
					
					marker2.ss = nodes[i];
					map.addOverlay(marker2);   
					addClickHandler(nodes,i,marker2,'工业','gy');
				}
			}
			var point = new BMap.Point(114.961141,27.805905);
			map.disable3DBuilding();
			map.centerAndZoom(point, 12); 	
	}else if(this.className=='building-btn'){
		for(var i=0;i<nodes.length;i++){//建筑
				if(nodes[i].baseInfo[0].type=='building'){
					var pt = new BMap.Point(nodes[i].baseInfo[0].lon,nodes[i].baseInfo[0].lat);
					var myIcon = new BMap.Icon(nodes[i].baseInfo[0].icon, new BMap.Size(27,27));
					var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
					marker2.ss = nodes[i];
					map.addOverlay(marker2);   
					addClickHandler(nodes,i,marker2,'建筑','jz');
				}
			}	
		var point = new BMap.Point(114.938217,27.821369);
		map.disable3DBuilding();
		map.centerAndZoom(point, 14); 	
	}else if(this.className=='area-btn'){//区域
		document.getElementById("btn-type1").style.display="none";
		document.getElementById("btn-type2").style.display="none";
		document.getElementById("monitoring-point-data").style.display='';
		document.getElementById("point-data-inner").style.display='none';
		initMap();
	}else if(this.className=='environment-btn'){//环境
		for(var i=0;i<nodes.length;i++){
				if(nodes[i].baseInfo[0].type=='environment'){
					var pt = new BMap.Point(nodes[i].baseInfo[0].lon,nodes[i].baseInfo[0].lat);
					var myIcon = new BMap.Icon(nodes[i].baseInfo[0].icon, new BMap.Size(27,27));
					var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
					marker2.ss = nodes[i];
					map.addOverlay(marker2);   
					addClickHandler(nodes,i,marker2,'环境','hj');
				}
			}	
		var point = new BMap.Point(114.961932,27.805521);
		map.disable3DBuilding();
		map.centerAndZoom(point, 14); 	
	}else if(this.className=='traffic-btn'){//交通
		for(var i=0;i<nodes.length;i++){
				if(nodes[i].baseInfo[0].type=='traffic'){
					var pt = new BMap.Point(nodes[i].baseInfo[0].lon,nodes[i].baseInfo[0].lat);
					var myIcon = new BMap.Icon(nodes[i].baseInfo[0].icon, new BMap.Size(27,27));
					var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
					marker2.ss = nodes[i];
					map.addOverlay(marker2);   
					addClickHandler(nodes,i,marker2,'交通','jt');
				}
		}	
		var point = new BMap.Point(114.909615,27.812678);
		map.disable3DBuilding();
		map.centerAndZoom(point, 12);
	}else if(this.className=='light-btn'){//路灯
		for(var i=0;i<nodes.length;i++){
				if(nodes[i].baseInfo[0].type=='light'){
					var pt = new BMap.Point(nodes[i].baseInfo[0].lon,nodes[i].baseInfo[0].lat);
					var myIcon = new BMap.Icon(nodes[i].baseInfo[0].icon, new BMap.Size(27,27));
					var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
					marker2.ss = nodes[i];
					map.addOverlay(marker2);   
					addClickHandler(nodes,i,marker2,'路灯','ld');
				}
			}	
		var point = new BMap.Point(114.833151,27.807055);
		map.disable3DBuilding();
		map.centerAndZoom(point, 12);
	}else if(this.className=='av-btn'){//光伏
		for(var i=0;i<nodes.length;i++){
				if(nodes[i].baseInfo[0].type=='av'){
					var pt = new BMap.Point(nodes[i].baseInfo[0].lon,nodes[i].baseInfo[0].lat);
					var myIcon = new BMap.Icon(nodes[i].baseInfo[0].icon, new BMap.Size(27,27));
					var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
					marker2.ss = nodes[i];
					map.addOverlay(marker2);   
					addClickHandler(nodes,i,marker2,'光伏','gf');
				}
			}	
		var point = new BMap.Point(115.004907,27.841302);
		map.disable3DBuilding();
		map.centerAndZoom(point, 15);
	}
	
	
	$(this).toggleClass("active").siblings().removeClass("active");
});
function addClickHandler(nodes,i,marker,type,py){
		marker.addEventListener("mouseover",function(e){
					var tst = this.ss;
					var html = '';
					//alert(JSON.stringify(tst.energy[0]));
					if(py=='gy'|| py=='gf'||py=='hj'){
						var lable1=new Object();
						lable1["name"] = tst.energy[0].title;
						lable1["val"] = tst.energy[0].big;
						lable1["un"] = tst.energy[0].summary;
						
						
						var lable2=new Object();
						lable2["name"] = tst.environment[0].title;
						lable2["val"] = tst.environment[0].big;
						lable2["un"] = tst.environment[0].summary;
						
						var lable3=new Object();
						lable3["name"] = tst.economy[0].title;
						lable3["val"] = tst.economy[0].big;
						lable3["un"] = tst.economy[0].summary;
						
						html = ['<div id="hover-window11" style="font-family:Microsoft YaHei"><h3 style="background-color:#1799D7;font-weight:bolder;text-align:center;line-height:25px;height:25px">'+tst.baseInfo[0].name+'</h3>'
						+'<img src="'+tst.baseInfo[0].img+'" width="310" height="130" /><ul>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">地址:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+tst.baseInfo[0].address+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">类型:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+type+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable1.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable1.val+'</span><span style="width:100px;display:inline-block;">'+lable1.un+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable2.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable2.val+'</span><span style="width:100px;display:inline-block;">'+lable2.un+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable3.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable3.val+'</span></span><span style="width:100px;display:inline-block;">'+lable3.un+'</span></li>'
						+'</ul></div>'];
						infoBox = new BMapLib.InfoBox(map,html.join(""),{
									boxStyle:{
										//background:"url('./image/secs/map/btn/tipbox.gif') no-repeat center top"
										width: "310px"
										,height: "300px"
									}
									,closeIconMargin: "0px 0px 0 0"
									,enableAutoPan: true
									,align: INFOBOX_AT_TOP
								});
					}else if(py=='ld'){
						var lable1=new Object();
						lable1["name"] = tst.environment[0].title;
						lable1["val"] = tst.environment[0].big;
						lable1["un"] = tst.environment[0].summary;
						
						
						var lable2=new Object();
						lable2["name"] = tst.environment[1].title;
						lable2["val"] = tst.environment[1].big;
						lable2["un"] = tst.environment[1].summary;
						
						var lable3=new Object();
						lable3["name"] = tst.environment[2].title;
						lable3["val"] = tst.environment[2].big;
						lable3["un"] = tst.environment[2].summary;		
						
						var lable4=new Object();
						lable4["name"] = tst.economy[0].title;
						lable4["val"] = tst.economy[0].big;
						lable4["un"] = tst.economy[0].summary;		
						
						var lable5=new Object();
						lable5["name"] = tst.capacity[0].title;
						lable5["val"] = tst.capacity[0].big;
						lable5["un"] = tst.capacity[0].summary;		
					
						html = ['<div id="hover-window11" style="font-family:Microsoft YaHei"><h3 style="background-color:#1799D7;font-weight:bolder;text-align:center;line-height:25px;height:25px">'+nodes[i].baseInfo[0].name+'</h3>'
						+'<ul>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">道路:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+tst.baseInfo[0].address+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">类型:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+type+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable1.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable1.val+'</span><span style="width:100px;display:inline-block;">'+'万千瓦时'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable2.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable2.val+'</span><span style="width:100px;display:inline-block;">'+'万千瓦时'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable3.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable3.val+'</span><span style="width:100px;display:inline-block;">'+'万千瓦时'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable4.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable4.val+'</span><span style="width:100px;display:inline-block;">'+'盏'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable5.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable5.val+'</span></span><span style="width:100px;display:inline-block;">'+'w/m2'+'</span></li>'
						+'</ul></div>'];
						infoBox = new BMapLib.InfoBox(map,html.join(""),{
									boxStyle:{
										//background:"url('./image/secs/map/btn/tipbox.gif') no-repeat center top"
										width: "310px"
										,height: "220px"
									}
									,closeIconMargin: "0px 0px 0 0"
									,enableAutoPan: true
									,align: INFOBOX_AT_TOP
								});
					}else if(py=='jt'){
						var lable1=new Object();
						lable1["name"] = tst.energy[0].title;
						lable1["val"] = tst.energy[0].big;
						lable1["un"] = tst.energy[0].summary;
						
						
						var lable2=new Object();
						lable2["name"] = tst.environment[0].title;
						lable2["val"] = tst.environment[0].big;
						lable2["un"] = tst.environment[0].summary;
						
						var lable3=new Object();
						lable3["name"] = tst.capacity[0].title;
						lable3["val"] = tst.capacity[0].big;
						lable3["un"] = tst.capacity[0].summary;	
						
						var lable4=new Object();
						lable4["name"] = tst.economy[0].title;
						lable4["val"] = tst.economy[0].big;
						lable4["un"] = tst.economy[0].summary;				
					
						html = ['<div id="hover-window11" style="font-family:Microsoft YaHei"><h3 style="background-color:#1799D7;font-weight:bolder;text-align:center;line-height:25px;height:25px">'+tst.baseInfo[0].name+'</h3>'
						+'<ul>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">地址:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+tst.baseInfo[0].address+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">类型:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+type+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">用途:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+lable1.name+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable2.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable2.val+'</span><span style="width:100px;display:inline-block;">'+'升'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable3.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable3.val+'</span><span style="width:100px;display:inline-block;">'+'升/公里'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable4.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable4.val+'</span><span style="width:100px;display:inline-block;">'+'千克'+'</span></li>'
						+'</ul></div>'];
						infoBox = new BMapLib.InfoBox(map,html.join(""),{
									boxStyle:{
										//background:"url('./image/secs/map/btn/tipbox.gif') no-repeat center top"
										width: "310px"
										,height: "180px"
									}
									,closeIconMargin: "0px 0px 0 0"
									,enableAutoPan: true
									,align: INFOBOX_AT_TOP
								});
					}else if(py=='jz'){
						var lable1=new Object();
						lable1["name"] = tst.energy[0].title;
						lable1["val"] = tst.energy[0].big;
						lable1["un"] = tst.energy[0].summary;
						
						
						var lable2=new Object();
						lable2["name"] = tst.energy[1].title;
						lable2["val"] = tst.energy[1].big;
						lable2["un"] = tst.energy[1].summary;
						
						var lable3=new Object();
						lable3["name"] = tst.energy[2].title;
						lable3["val"] = tst.energy[2].big;
						lable3["un"] = tst.energy[2].summary;
						
						var lable4=new Object();
						lable4["name"] = tst.economy[0].title;
						lable4["val"] = tst.economy[0].big;
						lable4["un"] = tst.economy[0].summary;
						
						var lable5=new Object();
						lable5["name"] = tst.economy[1].title;
						lable5["val"] = tst.economy[1].big;
						lable5["un"] = tst.economy[1].summary;
						
						
						html = ['<div id="hover-window11" style="font-family:Microsoft YaHei"><h3 style="background-color:#1799D7;font-weight:bolder;text-align:center;line-height:25px;height:25px">'+tst.baseInfo[0].name+'</h3>'
						+'<img src="'+tst.baseInfo[0].img+'" width="310" height="130" /><ul>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">地址:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+tst.baseInfo[0].address+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">类型:</span><span style="width:200px;margin-left:10px;display:inline-block;">'+type+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable1.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable1.val+'</span><span style="width:100px;display:inline-block;">'+'吨标煤'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable2.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable2.val+'</span><span style="width:100px;display:inline-block;">'+'万千瓦时'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable3.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable3.val+'</span><span style="width:100px;display:inline-block;">'+'千立方米'+'</span></li>'
						+'<li style="list-style:outside none none;background-color:#103D84;height:25px;line-height:25px;color:white"><span style="text-align:right;width:100px;display:inline-block;">'+lable4.name+':</span><span style="width:100px;margin-left:10px;display:inline-block;">'+lable4.val+'</span><span style="width:100px;display:inline-block;">'+'千瓦时/人'+'</span></li>'
						+'</ul></div>'];
						infoBox = new BMapLib.InfoBox(map,html.join(""),{
									boxStyle:{
										//background:"url('./image/secs/map/btn/tipbox.gif') no-repeat center top"
										width: "310px"
										,height: "320px"
									}
									,closeIconMargin: "0px 0px 0 0"
									,enableAutoPan: true
									,align: INFOBOX_AT_TOP
								});
					}			
					infoBox.open(marker);}
				);
				marker.addEventListener("mouseout",function(e){
					infoBox.close();}
				);
				marker.addEventListener("click",function(e){
					var tst = this.ss;
					if(tst.baseInfo[0].type=='industrial'){//
						$("#tl1").removeClass().addClass("index-energy").addClass("left");
						$("#tl2").removeClass().addClass("index-environment").addClass("left");
						$("#tl3").removeClass().addClass("index-capacity").addClass("left");
						$("#tl4").removeClass().addClass("index-economy").addClass("left");
					}else if(tst.baseInfo[0].type=='light'){
						$("#tl1").removeClass().addClass("index-zm1").addClass("left");
						$("#tl2").removeClass().addClass("index-zm2").addClass("left");
						$("#tl3").removeClass().addClass("index-zm3").addClass("left");
						$("#tl4").removeClass().addClass("index-zm4").addClass("left");
					}else if(tst.baseInfo[0].type=='av'){
						$("#tl1").removeClass().addClass("index-kzs1").addClass("left");
						$("#tl2").removeClass().addClass("index-kzs2").addClass("left");
						$("#tl3").removeClass().addClass("index-kzs3").addClass("left");
						$("#tl4").removeClass().addClass("index-kzs4").addClass("left");
					}else if(tst.baseInfo[0].type=='building'){
						$("#tl1").removeClass().addClass("index-jz1").addClass("left");
						$("#tl2").removeClass().addClass("index-jz2").addClass("left");
						$("#tl3").removeClass().addClass("index-jz3").addClass("left");
						$("#tl4").removeClass().addClass("index-jz4").addClass("left");
					}else if(tst.baseInfo[0].type=='environment'){
						$("#tl1").removeClass().addClass("index-hj1").addClass("left");
						$("#tl2").removeClass().addClass("index-hj2").addClass("left");
						$("#tl3").removeClass().addClass("index-hj3").addClass("left");
						$("#tl4").removeClass().addClass("index-hj4").addClass("left");
					}else if(tst.baseInfo[0].type=='traffic'){
						$("#tl1").removeClass().addClass("index-jt1").addClass("left");
						$("#tl2").removeClass().addClass("index-jt2").addClass("left");
						$("#tl3").removeClass().addClass("index-jt3").addClass("left");
						$("#tl4").removeClass().addClass("index-jt4").addClass("left");
					}
					
					
					initData(tst);
					
				});
				marker.addEventListener("dblclick",function(e){
					var tst = this.ss;
					if(basePath){
						var url = basePath+"xmlPaneAction.action?fileName=secs/ss/analyse-enterprice-xinyu&viewName=main&id=34";
						
						//title, url, height, width, id,img,precent
						var diag = _lstGetDialogFromUrl("基本信息",url);
						diag.ID = "diag_marker";
						diag.Title = tst.baseInfo[0].name;
						diag.Width= 1000;
						diag.Height='100';
						diag.show();
					}
					//var url = "xmlPaneAction.action?fileName=secs/ss/analyse-enterprice-xinyu&viewName=main&id=34";
					//_lstViewRow('secs/ss/analyse-enterprice-xinyu', 'code', '新余钢铁', 'main', '&id=' + 34);
				});
}



