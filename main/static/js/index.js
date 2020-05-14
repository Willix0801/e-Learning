// https://stackoverflow.com/questions/7491638/extjs-4-treestore-with-both-static-and-dynamically-loaded-data
// dynamic loading of the tree store above link
var mycenterTab;
var itemsandmodules;
var is_super;
Ext.onReady(function () {

    
    
    var mynorthpanel = Ext.create('Ext.panel.Panel', {
        layout: 'fit',
        region: 'north',
        margins: '-1 -1 -1 -1',
        height: 40,
        width: '100%',  
        listeners: {
            'beforerender': function() {
                Ext.Ajax.request({
                    url: '/names',
                    method: 'POST',
                    async: false,
                    success: function(response) {
                        mynorthpanel.html = "<div id='top'><div class='title'><h1>E-LEARNING</h1></div><div class='welcome'><p> Welcome, "+ JSON.parse(response.responseText).names + " <a href='/logout'>Logout</a></p></div></div>"
                        
                    },
                    failure: function() {
                        window.location='/login'
                    }
                });
                
            }
        },
    });

    var southpanel = Ext.create('Ext.panel.Panel', {
        region: 'south',
        margins: '-1 -1 -1 -1',
        html: '<div style="color: dark-grey; margin-left: 9px; font-weight:bold; text-align: left">Copyright &copy;. All rights reserved  For Support.: +250788846759</div>',
        frame: true,
    });

    var itemsandmodules;

    (function(){

        Ext.Ajax.request({
            url: '/names',
                method: 'POST',
                async: false,
                success: function(response){
                    if(JSON.parse(response.responseText).superuser){
                        
                        itemsandmodules = Ext.create('Ext.data.TreeStore', {
                            root: {
                                expanded: true,
                                children: [
                                    {
                                     text: "My Profile", 
                                     id: 'node1',
                                     disabled: true,
                                     expanded: true, 
                                     children: [
                                        {text: 'My Profile', leaf: true, id: 'uprofile', iconCls: 'profile-icon'},
                                        // {text: 'work', leaf: true, id: 'work', iconCls: 'dashboard-icon'},
                                        
                                     ],
                                 },{

                                    text: "Ordinary-level", expanded: true, 
                                    children: [
                                        {text: 'Senior One', leaf: true, id: 'senioronec', iconCls: 'levelone-icon'},
                                        {text: 'Senior two', leaf: true, id: 'seniortwoc', iconCls: 'leveltwo-icon'},
                                        {text: 'Senior three', leaf: true, id: 'seniorthreec', iconCls: 'levelthree-icon'},
                                    ]
                                },{

                                    text: "Advanced-level", expanded: true,
                                    children: [
                                        {text: "Senior Four", leaf: true, iconCls: 'levelfour-icon', id:'seniorfourc'},
                                        {text: "Senior Five", leaf: true, iconCls: 'levelfive-icon', id:'seniorfivec'},
                                        {text: "Senior Six", leaf: true, iconCls: 'levelsix-icon', id:'seniorsixc'},
                                    ]
                                },
                                    
                                    {
                                     text: "Administration", 
                                     id: 'node3',
                                     expanded: true,
                                     children: [
                                        {text: 'users', leaf: true, id: 'usersinfo', iconCls: 'admin-icon'},
                                        {
                                            text: "Settings", expanded: false,
                                            children: [

                                                {text: 'Senior One', leaf: true, id: 'seniorone_admin', iconCls: 'levelone-icon'},
                                                {text: 'Senior two', leaf: true, id: 'seniortwoc_admin', iconCls: 'leveltwo-icon'},
                                                {text: 'Senior three', leaf: true, id: 'seniorthreec_admin', iconCls: 'levelthree-icon'},
                                                {text: "Senior Four", leaf: true, iconCls: 'levelfour-icon', id:'seniorfourc_admin'},
                                                {text: "Senior Five", leaf: true, iconCls: 'levelfive-icon', id:'seniorfivec_admin'},
                                                {text: "Senior Six", leaf: true, iconCls: 'levelsix-icon', id:'seniorsixc_admin'},
                                            ]
                                        }
                                     ] 
                                 }


                                ]
                            }
                        });

                    } else{
                        
                        itemsandmodules = Ext.create('Ext.data.TreeStore', {
                            root: {
                                expanded: true,
                                children: [
                                    {
                                     text: "My Profile", 
                                     id: 'node1',
                                     disabled: true,
                                     expanded: true, 
                                     children: [
                                        {text: 'My Profile', leaf: true, id: 'uprofile', iconCls: 'profile-icon'},
                                        // {text: 'work', leaf: true, id: 'work', iconCls: 'dashboard-icon'},
                                        
                                     ],
                                 },{

                                    text: "Ordinary-level", expanded: true, 
                                    children: [
                                        {text: 'Senior One', leaf: true, id: 'senioronec', iconCls: 'levelone-icon'},
                                        {text: 'Senior two', leaf: true, id: 'seniortwoc', iconCls: 'leveltwo-icon'},
                                        {text: 'Senior three', leaf: true, id: 'seniorthreec', iconCls: 'levelthree-icon'},
                                    ]
                                },{

                                    text: "Advanced-level", expanded: true,
                                    children: [
                                        {text: "Senior Four", leaf: true, iconCls: 'levelfour-icon', id:'seniorfourc'},
                                        {text: "Senior Five", leaf: true, iconCls: 'levelfive-icon', id:'seniorfivec'},
                                        {text: "Senior Six", leaf: true, iconCls: 'levelsix-icon', id:'seniorsixc'},
                                    ]
                                }


                                ]
                            }
                        });

                    }
                },
                failure: function() {
                    window.location='/login'
                },

        });

    })();

    mycenterTab = Ext.create('Ext.tab.Panel',{
        id: 'maintabpanel',
        activeTab: 0,
        region: 'center',
        deferredRender: false,
        title: 'E-LEARNING PORTAL',
        iconCls: 'stranger-icon',
        // plain: true,
        items: [
        myprofile()
        /*inbox(),*/

        ]
           
    });
    var modulestree = Ext.create('Ext.tree.Panel', {
        region: 'west', //for border layout
        useArrows:true,
        title: 'Menu',
        id: 'menuid',
        height: '100%',
        width: 200,
        store: itemsandmodules,
        rootVisible: false,
        // margins: '1 0 1 1',
        listeners: {
            expand: function() {
                mycenterTab.removeAll()
                mycenterTab.setTitle("first Menu")
                mycenterTab.add(sent())
                mycenterTab.setActiveTab(sent())
            },
            itemclick: function (s, record, m) { 
                var moduleitems = record.data.id
                if(moduleitems==='uprofile'){
                    myprofile()
                    mycenterTab.setActiveTab(0)

                }else if(moduleitems==='senioronec'){

                    if(mycenterTab.getComponent(seniorone_student())==undefined){
                        mycenterTab.add(seniorone_student()).show()
                    }else{
                        mycenterTab.setActiveTab(seniorone_student())
                    }

                }else if(moduleitems==='seniortwoc'){

                    if(mycenterTab.getComponent(seniortwo_student())==undefined){
                        mycenterTab.add(seniortwo_student()).show()
                    }else{
                        mycenterTab.setActiveTab(seniortwo_student())
                    }

                }else if(moduleitems==='seniorthreec'){
                    
                    if(mycenterTab.getComponent(seniorthree_student())==undefined){
                        mycenterTab.add(seniorthree_student()).show()
                    }else{
                        mycenterTab.setActiveTab(seniorthree_student())
                    }

                }else if(moduleitems==='seniorfourc'){
                    
                    if(mycenterTab.getComponent(seniorfour_student())==undefined){
                        mycenterTab.add(seniorfour_student()).show()
                    }else{
                        mycenterTab.setActiveTab(seniorfour_student())
                    }

                }else if(moduleitems==='seniorfivec'){
                    
                    if(mycenterTab.getComponent(seniorfive_student())==undefined){
                        mycenterTab.add(seniorfive_student()).show()
                    }else{
                        mycenterTab.setActiveTab(seniorfive_student())
                    }

                }else if(moduleitems==='seniorsixc'){
                    
                    if(mycenterTab.getComponent(seniorsix_student())==undefined){
                        mycenterTab.add(seniorsix_student()).show()
                    }else{
                        mycenterTab.setActiveTab(seniorsix_student())
                    }
                    
                }else if(moduleitems==='usersinfo'){
                    
                    if(mycenterTab.getComponent(usersinfo())==undefined){
                        mycenterTab.add(usersinfo()).show()
                    }else{
                        mycenterTab.setActiveTab(usersinfo())
                    }

                }else if (moduleitems==='seniorone_admin') {

                    if(mycenterTab.getComponent(seniorone_admin())==undefined){
                        mycenterTab.add(seniorone_admin()).show()
                    }else{
                        mycenterTab.setActiveTab(seniorone_admin())
                    }

                }else if (moduleitems==='seniortwoc_admin') {
                    
                    if(mycenterTab.getComponent(seniortwo_admin())==undefined){
                        mycenterTab.add(seniortwo_admin()).show()
                    }else{
                        mycenterTab.setActiveTab(seniortwo_admin())
                    }

                }else if (moduleitems==='seniorthreec_admin') {
                    
                    if(mycenterTab.getComponent(seniorthree_admin())==undefined){
                        mycenterTab.add(seniorthree_admin()).show()
                    }else{
                        mycenterTab.setActiveTab(seniorthree_admin())
                    }

                }else if (moduleitems==='seniorfourc_admin') {
                    
                    if(mycenterTab.getComponent(seniorfour_admin())==undefined){
                        mycenterTab.add(seniorfour_admin()).show()
                    }else{
                        mycenterTab.setActiveTab(seniorfour_admin())
                    }

                }else if (moduleitems==='seniorfivec_admin') {
                    
                    if(mycenterTab.getComponent(seniorfive_admin())==undefined){
                        mycenterTab.add(seniorfive_admin()).show()
                    }else{
                        mycenterTab.setActiveTab(seniorfive_admin())
                    }

                }else if (moduleitems==='seniorsixc_admin') {
                    
                    if(mycenterTab.getComponent(seniorsix_admin())==undefined){
                        mycenterTab.add(seniorsix_admin()).show()
                    }else{
                        mycenterTab.setActiveTab(seniorsix_admin())
                    }
                }
            }
        }
    });


    Ext.MessageBox.show({
        msg: 'Loading, please wait...',
        progressText: 'Loading...',
        width:300,
        wait:true,
        waitConfig: {interval:200},
        // animateTarget: 'waitButton'
    });
    setTimeout(function(){

        Ext.MessageBox.hide();
        var viewport = Ext.create('Ext.container.Viewport', {
            layout: 'border',
            width: 600,
            items: [
            mynorthpanel, 
            modulestree, 
            southpanel,
            mycenterTab
                

            ],
            renderTo: Ext.getBody()
        });
        
    }, 5000);
    

});