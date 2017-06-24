import React, {Component} from 'react';
import ReactDom from 'react-dom';



export default class MyContainer extends Component {
  render(){
    return (
      <div id="container">
            <div className="g-bar">
                <div className="f-wrap">
                    <ul className="m-barnav">
                        <li className="m-dropdown">
                            <span>网易</span><i className="u-arrow down"></i>
                            <div className="menu">
                                <span>新闻</span>
                                <span>微博</span>
                                <span>邮箱</span>
                                <span>闪电邮</span>
                                <span>相册</span>
                                <span>有道</span>
                                <span>手机邮</span>
                                <span>印象派</span>
                                <span>梦幻人生</span>
                                <i className="divider"></i>
                                <span className="more">更多</span>
                            </div>
                        </li>
                        <li><span>博客</span></li>
                        <li><span>摄影</span></li>
                        <li><span>摄影11111</span></li>
                        <li><span>摄影222</span></li>
                        <li><span>随便看看</span></li>
                    </ul>
                    <div className="m-usernav">
                        <a href="javascript:;" className="greet s-gray">中午好，<span className="username">testblog1</span>（<i className="u-icon u-icon-email"></i><span className="count">5</span>）</a>
                        <span className="f-pipenav"></span>
                        <i className="u-icon u-icon-usercenter f-ml10"></i><span>个人中心</span>
                        <a href="javascript:;" className="f-ml10">消息（<span className="s-orange">1274</span>）</a>
                        <a href="javascript:;" className="f-ml10">反馈</a>
                        <span className="f-pipenav"></span>
                        <a href="javascript:;" className="s-gray-1">退出</a>
                    </div>
                </div>
            </div>
            <div className="g-hd">
                <div className="f-wrap">
                    <div className="m-userinfo">
                        <img src="http://os.blog.163.com/common/ava.s?host=testblog1&b=0&r=-1" alt="avatar" className="avatar"/>
                        <h1 className="greet">欢迎！<span className="username">testblog</span></h1>
                        <button className="uploadavatar u-btn">传相片</button>
                    </div>
                </div>
            </div>

            <div className="f-wrap f-cb">
                <div className="g-bd">
                    <div className="g-sd">
                        <div className="m-slidenav">
                            <h3 className="navtitle"><i className="u-icon u-icon-blognews"></i>博客动态</h3>
                            <ul className="navmn">
                                <li><a href="javascript:;">博客动态</a></li>
                                <li><a href="javascript:;">消息中心</a></li>
                            </ul>
                        </div>
                        <div className="m-slidenav">
                            <h3 className="navtitle"><i className="u-icon u-icon-blogmanage"></i>博客管理</h3>
                            <div className="navmn">
                                <ul>
                                    <li><a href="javascript:;">日志管理</a></li>
                                    <li className="current"><a href="javascript:;">博友管理</a></li>
                                    <li><a href="javascript:;">博客设置</a></li>
                                    <li><a href="javascript:;">博客装扮</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="m-slidenav">
                            <h3 className="navtitle"><i className="u-icon u-icon-service"></i>服务</h3>
                            <div className="navmn">
                                <ul>
                                    <li><a href="javascript:;">博客动态</a></li>
                                    <li><a href="javascript:;">消息中心</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="g-cnt">
                        <h2 className="g-tl">日志管理</h2>
                        <div className="g-cntmn">
                            <ul className="m-tabs" id="j-tab">
                                <li className="current" data-id="j-con1"><a href="javascript:;">日志</a></li>
                                <li data-id="j-con2"><a href="javascript:;">标签</a></li>
                            </ul>
                            <div className="m-tabcontain">
                                <div name="j-con" id="j-con1">
                                    <form action="" className="m-form f-cb" name="j-formpost">
                                        <input id="j-ipttitle" type="text" className="formtitle" placeholder="日志标题"/>
                                        <textarea placeholder="这里可以写日志哦~" name="" id="j-txacontent" className="formcnt"></textarea>
                                        <button type="reset" className="f-fr u-btn" id="j-btnreset">清空</button>
                                        <button type="submit" id="j-addblog" className="f-fr u-btn f-mr5">发布</button>
                                    </form>
                                    <ul id="j-postlist" className="m-postlist"></ul>
                                    <div className="m-selectall">
                                        <label>
                                            <input type="checkbox" className="chk-selectall" name="selectall" id="j-selectall"/>全选</label>
                                        <button className="u-btn" id="j-batchdel">删除</button>
                                    </div>
                                </div>
                                <div name="j-con" id="j-con2" className="f-dn">
                                    <div>
                                        没有标签
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="g-cntsd">
                            {/* 问题: 需要标题语义化 */}
                            <div className="title">好友最新日志</div>
                            <div className="m-scrolllist">
                                <ul id="j-friendsposts"></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="g-footer">
                <div className="m-footer">
                    <a href="javascript:;">公司简介</a>
                    <a href="javascript:;">联系方法</a>
                    <a href="javascript:;">招聘信息</a>
                    <a href="javascript:;">客户服务</a>
                    <a href="javascript:;">相关法律</a>
                    <a href="javascript:;">博客风格</a>
                    <a href="javascript:;">手机博客</a>
                    <a href="javascript:;"><i className="u-icon u-icon-rss"></i>订阅此博客</a>
                    <p>网易公司版权所有 &copy;1997-2016</p>
                </div>
            </div>
            </div>
    )
  }
}
