

function validURL(link) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(link);
}

var s1subjects_store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    fields: [
        {name: 'id', mapping: 'dicts.id'},
        {name: 'subject', mapping: 'dicts.subject'},
        {name: 'notes', mapping: 'dicts.notes'},
        {name: 'registered_by', mapping: 'dicts.registered_by'},
        {name: 'registered_on', mapping: 'dicts.registered_on'}
    ],
    proxy: {
        type: 'ajax',
        url: '/olevel/gets1subjects',
        actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
        reader: {
            type: 'json',
            root: 'response', // which should match at the back
        },
    }
});


var s2subjects_store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    fields: [
        {name: 'id', mapping: 'dicts.id'},
        {name: 'subject', mapping: 'dicts.subject'},
        {name: 'notes', mapping: 'dicts.notes'},
        {name: 'registered_by', mapping: 'dicts.registered_by'},
        {name: 'registered_on', mapping: 'dicts.registered_on'}
    ],
    proxy: {
        type: 'ajax',
        url: '/olevel/gets2subjects',
        actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
        reader: {
            type: 'json',
            root: 'response', // which should match at the back
        },
    }
});

var s3subjects_store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    fields: [
        {name: 'id', mapping: 'dicts.id'},
        {name: 'subject', mapping: 'dicts.subject'},
        {name: 'notes', mapping: 'dicts.notes'},
        {name: 'registered_by', mapping: 'dicts.registered_by'},
        {name: 'registered_on', mapping: 'dicts.registered_on'}
    ],
    proxy: {
        type: 'ajax',
        url: '/olevel/gets3subjects',
        actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
        reader: {
            type: 'json',
            root: 'response', // which should match at the back
        },
    }
});

var s4subjects_store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    fields: [
        {name: 'id', mapping: 'dicts.id'},
        {name: 'subject', mapping: 'dicts.subject'},
        {name: 'notes', mapping: 'dicts.notes'},
        {name: 'registered_by', mapping: 'dicts.registered_by'},
        {name: 'registered_on', mapping: 'dicts.registered_on'}
    ],
    proxy: {
        type: 'ajax',
        url: '/alevel/gets4subjects',
        actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
        reader: {
            type: 'json',
            root: 'response', // which should match at the back
        },
    }
});


var s5subjects_store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    fields: [
        {name: 'id', mapping: 'dicts.id'},
        {name: 'subject', mapping: 'dicts.subject'},
        {name: 'notes', mapping: 'dicts.notes'},
        {name: 'registered_by', mapping: 'dicts.registered_by'},
        {name: 'registered_on', mapping: 'dicts.registered_on'}
    ],
    proxy: {
        type: 'ajax',
        url: '/alevel/gets5subjects',
        actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
        reader: {
            type: 'json',
            root: 'response', // which should match at the back
        },
    }
});

var s6subjects_store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    fields: [
        {name: 'id', mapping: 'dicts.id'},
        {name: 'subject', mapping: 'dicts.subject'},
        {name: 'notes', mapping: 'dicts.notes'},
        {name: 'registered_by', mapping: 'dicts.registered_by'},
        {name: 'registered_on', mapping: 'dicts.registered_on'}
    ],
    proxy: {
        type: 'ajax',
        url: '/alevel/gets6subjects',
        actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
        reader: {
            type: 'json',
            root: 'response', // which should match at the back
        },
    }
});


var s1subjects_link_store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    fields: [
        {name: 'id', mapping: 'dicts.id'},
        {name: 'title', mapping: 'dicts.title'},
        {name: 'description', mapping: 'dicts.description'},
        {name: 'registered_by', mapping: 'dicts.registered_by'},
        {name: 'registered_on', mapping: 'dicts.registered_on'},
        {name: 'link', mapping: 'dicts.link'}
    ],
    proxy: {
        type: 'ajax',
        url: '/olevel/gets1subjectlinks',
        actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
        reader: {
            type: 'json',
            root: 'response', // which should match at the back
        },
    }
});


var s2subjects_link_store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    fields: [
        {name: 'id', mapping: 'dicts.id'},
        {name: 'title', mapping: 'dicts.title'},
        {name: 'description', mapping: 'dicts.description'},
        {name: 'registered_by', mapping: 'dicts.registered_by'},
        {name: 'registered_on', mapping: 'dicts.registered_on'},
        {name: 'link', mapping: 'dicts.link'}
    ],
    proxy: {
        type: 'ajax',
        url: '/olevel/gets2subjectlinks',
        actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
        reader: {
            type: 'json',
            root: 'response', // which should match at the back
        },
    }
});

var s3subjects_link_store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    fields: [
        {name: 'id', mapping: 'dicts.id'},
        {name: 'title', mapping: 'dicts.title'},
        {name: 'description', mapping: 'dicts.description'},
        {name: 'registered_by', mapping: 'dicts.registered_by'},
        {name: 'registered_on', mapping: 'dicts.registered_on'},
        {name: 'link', mapping: 'dicts.link'}
    ],
    proxy: {
        type: 'ajax',
        url: '/olevel/gets3subjectlinks',
        actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
        reader: {
            type: 'json',
            root: 'response', // which should match at the back
        },
    }
});


var s4subjects_link_store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    fields: [
        {name: 'id', mapping: 'dicts.id'},
        {name: 'title', mapping: 'dicts.title'},
        {name: 'description', mapping: 'dicts.description'},
        {name: 'registered_by', mapping: 'dicts.registered_by'},
        {name: 'registered_on', mapping: 'dicts.registered_on'},
        {name: 'link', mapping: 'dicts.link'}
    ],
    proxy: {
        type: 'ajax',
        url: '/alevel/gets4subjectlinks',
        actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
        reader: {
            type: 'json',
            root: 'response', // which should match at the back
        },
    }
});


var s5subjects_link_store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    fields: [
        {name: 'id', mapping: 'dicts.id'},
        {name: 'title', mapping: 'dicts.title'},
        {name: 'description', mapping: 'dicts.description'},
        {name: 'registered_by', mapping: 'dicts.registered_by'},
        {name: 'registered_on', mapping: 'dicts.registered_on'},
        {name: 'link', mapping: 'dicts.link'}
    ],
    proxy: {
        type: 'ajax',
        url: '/alevel/gets5subjectlinks',
        actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
        reader: {
            type: 'json',
            root: 'response', // which should match at the back
        },
    }
});

var s6subjects_link_store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    fields: [
        {name: 'id', mapping: 'dicts.id'},
        {name: 'title', mapping: 'dicts.title'},
        {name: 'description', mapping: 'dicts.description'},
        {name: 'registered_by', mapping: 'dicts.registered_by'},
        {name: 'registered_on', mapping: 'dicts.registered_on'},
        {name: 'link', mapping: 'dicts.link'}
    ],
    proxy: {
        type: 'ajax',
        url: '/alevel/gets6subjectlinks',
        actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
        reader: {
            type: 'json',
            root: 'response', // which should match at the back
        },
    }
});

function seniorone_admin() {
    var url = '/olevel/addsubjectone'
    var url_subject_edit = '/olevel/editsubjectone'
    var url_s1_subject = '/olevel/adds1subjectlink'
    var url_s1_edit_subject = '/olevel/edits1subjectlink'

    var subject_id, link_id, link_title, link, link_desc;
    var subject_name;
    var subject_desc;
	var seniorone_admin_settings =Ext.create('Ext.panel.Panel', {
		title: 'Senior One',
		id: 'seniorone_admin_settings',
		layout: 'border',
        iconCls: 'levelone-icon',
		items: [{
			xtype: 'gridpanel',
            region: 'west',
            width: '40%',
            title: 'Subjects',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s1subjects_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Subject', dataIndex: 'subject', flex: 30 / 100},
                {text: 'Registered On', dataIndex: 'registered_on', flex: 35 / 100},
                {text: 'Created by', dataIndex: 'registered_by', flex: 35 / 100},

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {notes}</p>'
                ],
            }],

            listeners: {

                itemclick: function(data, record, position){
                    subject_id = record.data.id;
                    subject_name = record.data.subject;
                    subject_desc = record.data.notes;
                    seniorone_admin_settings.getComponent(1).setTitle("Video Tutorials and Courses ("+
                        subject_name+")")

                    //Ext.getCmp("addsubject_1_links").setDisabled(false);
                    Ext.getCmp("editsubject_1").setDisabled(false);
                    Ext.getCmp("deletesubject_1").setDisabled(false);

                    seniorone_admin_settings.getComponent(1).store.getProxy().extraParams={subject_id: subject_id};
                    seniorone_admin_settings.getComponent(1).store.loadPage(1);

                },

                itemdblclick: function(data, record, position){
                    editsubject(url_subject_edit, editsubject_1, s1subjects_store, subject_id, subject_name, subject_desc);
                }
            },
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Add',
                    iconCls: 'add-icon',
                    id: 'addsubject_1',
                    listeners: {
                        'click': function() {
                            addsubject(url, addsubject_1, s1subjects_store)
                        }
                    }
                },{
                    xtype: 'tbseparator'
                },{

                    xtype: 'button',
                    text: 'Edit',
                    iconCls: 'edit-icon',
                    disabled: true,
                    id: 'editsubject_1',
                    listeners: {
                        'click': function() {
                            editsubject(url_subject_edit, editsubject_1, s1subjects_store, subject_id, subject_name, subject_desc);
                        }
                    }

                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s1subjects_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Delete',
                    iconCls: 'remove-icon',
                    id: 'deletesubject_1',
                    disabled: true,
                    iconCls: 'remove-icon',
                    listeners: {
                        'click': function() {
                            deleteOlevelSubject(subject_id, subject_name, s1subjects_store, "S1")
                        }
                    }
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:30,
                    width: 200,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorone_admin_settings.getComponent(0).store.getProxy().extraParams={pattern: f.getValue()};
                            seniorone_admin_settings.getComponent(0).store.loadPage(1);
                        }
                    }
                          
                }]
            },{

                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]

            }]
		},{
			xtype: 'gridpanel',
			region: 'east',
			width: '60%',
			title: 'Video Tutorials and Courses',
			margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s1subjects_link_store,
			columns: [
                {xtype: 'rownumberer'},        
                {text: 'Title', dataIndex: 'title', flex: 30 / 100},
                {text: 'Created By', dataIndex: 'registered_by', flex: 20 / 100},
                {text: 'Link', dataIndex: 'link', flex: 50 / 100},

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Title:</b> {title}</p>',
                    '<p><b>Registered On:</b> {registered_on}</p>',
                    '<p><b>Created By:</b> {registered_by}</p>',
                    '<p><b>Description:</b> {description}</p>'
                ],
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Add',
                    iconCls: 'add-icon',
                    id: 'addsubject_1_links',
                    listeners: {
                    	'click': function() {
                            if (subject_id==null) {
                                Ext.Msg.alert('Error', "Select subject first")
                            }else{
                                addsubjectlinkwin(url_s1_subject, addsubject_1_links, subject_id, subject_name, s1subjects_link_store)
                            }
                    		
                    	}
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Edit',
                    disabled: true,
                    iconCls: 'edit-icon',
                    id: 'editsubject_1_links',
                    listeners: {
                        'click': function() {
                            editsubjectlinkwin(url_s1_edit_subject, editsubject_1_links, link_id, subject_name, link_title, link, link_desc, s1subjects_link_store)
                        }
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s1subjects_link_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Delete Message',
                    id: 'deletesubject_1_links',
                    disabled: true,
                    iconCls: 'remove-icon',
                    listeners: {
                    	'click': function() {
                    		deleteOlevelSubjectLink(link_id, link_title, s1subjects_link_store, "S1")
                    	}
                    }
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:50,
                    width: 250,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorone_admin_settings.getComponent(1).store.getProxy().extraParams={pattern: f.getValue(),subject_id: subject_id};
                            seniorone_admin_settings.getComponent(1).store.loadPage(1);
                        }
                    }
                          
                }]
            },{
            	dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]
                
            }],

            listeners: {
                itemclick: function(data, record, position){
                    Ext.getCmp("editsubject_1_links").setDisabled(false)
                    Ext.getCmp('deletesubject_1_links').setDisabled(false)
                    link_id = record.data.id
                    link_title = record.data.title
                    link = record.data.link
                    link_desc = record.data.description

                    //editsubjectlinkwin(url_s1_edit_subject, editsubject_1_links, link_id, subject_name, link_title, link, link_desc, s1subjects_link_store)
                },

                itemdblclick: function(data, record, position){
                    var link = record.data.link
                    var title = record.data.title

                    if(mycenterTab.getComponent(viewVidTutorial(link, title))==undefined){
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }else{
                        mycenterTab.remove(viewVidTutorial(link, title))
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }
                }
            }
		}]
	})
	return seniorone_admin_settings
}

function addsubject(url, id, store) {

    var addsubjectwin = Ext.create('Ext.window.Window', {
        title: 'Add Subject',
        iconCls: 'add-icon',
        animateTarget: id,
        modal: true,
        items: [{
            xtype: 'form',
            frame: true,
            id: 'addsubjectform',
            items: [{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'fieldset',
                    title: 'Form Details',
                    width: 300,
                    items: [{
                        xtype: 'textfield',
                        labelAlign: 'top',
                        fieldLabel: 'Subject',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 275,
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Description',
                        height: 115,
                        labelWidth: 75,
                        labelAlign: 'top',
                        width: 275,
                        allowBlank: false,
                    }],  

                }],
            }],

            buttons: [{
                text: 'Save',
                formBind: true,
                handler: function() {
                    addsubjectwin.close()

                    Ext.Ajax.request({
                        url: url,
                        method: 'POST',
                        params: {

                            subject_name: addsubjectwin.getComponent(0).getComponent(0).getComponent(0).getComponent(0).getValue(),
                            subject_desc: addsubjectwin.getComponent(0).getComponent(0).getComponent(0).getComponent(1).getValue()
                        },

                        success: function(response) {

                            var response = JSON.parse(response.responseText)

                            if (!response.success) {
                                Ext.Msg.alert('Failed', response.msg)
                            } else if(response.success){
                                store.reload()
                                Ext.Msg.alert('Success', response.msg)
                            }
                            
                        },
                        failure: function() {
                            Ext.Msg.alert('Failed', 'Failed to Save')
                        }
                        
                    })

                }
            },{
                text: 'Cancel',
                handler: function () {
                    addsubjectwin.close()
                }
            }],
        }],
    });

    addsubjectwin.show();

}


function editsubject(url, id, store, record_id, name, desc) {

    var editsubjectwin = Ext.create('Ext.window.Window', {
        title: 'Edit Subject',
        iconCls: 'edit-icon',
        animateTarget: id,
        modal: true,
        items: [{
            xtype: 'form',
            frame: true,
            id: 'editsubjectform',
            items: [{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'fieldset',
                    title: 'Form Details',
                    width: 300,
                    items: [{
                        xtype: 'textfield',
                        labelAlign: 'top',
                        fieldLabel: 'Subject',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 275,
                        value: name
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Description',
                        height: 115,
                        labelWidth: 75,
                        labelAlign: 'top',
                        width: 275,
                        allowBlank: false,
                        value: desc
                    }],  

                }],
            }],

            buttons: [{
                text: 'Save',
                formBind: true,
                handler: function() {
                    editsubjectwin.close()

                    Ext.Ajax.request({
                        url: url,
                        method: 'POST',
                        params: {
                            pk: record_id,
                            subject_name: editsubjectwin.getComponent(0).getComponent(0).getComponent(0).getComponent(0).getValue(),
                            subject_desc: editsubjectwin.getComponent(0).getComponent(0).getComponent(0).getComponent(1).getValue()
                        },

                        success: function(response) {

                            var response = JSON.parse(response.responseText)

                            if (!response.success) {
                                Ext.Msg.alert('Failed', response.msg)
                            } else if(response.success){
                                store.reload()
                                Ext.Msg.alert('Success', response.msg)
                            }
                            
                        },
                        failure: function() {
                            Ext.Msg.alert('Failed', 'Failed to Save')
                        }
                        
                    })

                }
            },{
                text: 'Cancel',
                handler: function () {
                    editsubjectwin.close()
                }
            }],
        }],
    });

    editsubjectwin.show();

}



function addsubjectlinkwin(url, id, subject_id, subject_name, store) {

    var addsubjectlinkwin = Ext.create('Ext.window.Window', {
        title: 'Add Subject Link',
        iconCls: 'add-icon',
        animateTarget: id,
        modal: true,
        items: [{
            xtype: 'form',
            frame: true,
            id: 'addsubjectlinkform',
            items: [{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'fieldset',
                    title: 'Form Details',
                    width: 300,
                    items: [{
                        xtype: 'textfield',
                        labelAlign: 'top',
                        fieldLabel: 'Subject',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 275,
                        value: subject_name,
                        readOnly: true,

                    },{
                        xtype: 'textfield',
                        labelAlign: 'top',
                        fieldLabel: 'Title',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 275,
                    },{
                        xtype: 'textfield',
                        labelAlign: 'top',
                        fieldLabel: 'Link',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 275,
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Description',
                        height: 115,
                        labelWidth: 75,
                        labelAlign: 'top',
                        width: 275,
                        allowBlank: false,
                    }],  

                }],
            }],

            buttons: [{
                text: 'Save',
                formBind: true,
                handler: function() {

                    if(validURL(addsubjectlinkwin.getComponent(0).getComponent(0).getComponent(0).getComponent(2).getValue())){
                        addsubjectlinkwin.close()

                        Ext.Ajax.request({
                            url: url,
                            method: 'POST',
                            params: {

                                subject_id: subject_id,
                                title: addsubjectlinkwin.getComponent(0).getComponent(0).getComponent(0).getComponent(1).getValue(),
                                link: addsubjectlinkwin.getComponent(0).getComponent(0).getComponent(0).getComponent(2).getValue(),
                                description: addsubjectlinkwin.getComponent(0).getComponent(0).getComponent(0).getComponent(3).getValue()
                            },

                            success: function(response) {
                                var response = JSON.parse(response.responseText)

                                if (!response.success) {
                                    Ext.Msg.alert('Failed', response.msg)
                                } else if(response.success){
                                    store.reload()
                                    Ext.Msg.alert('Success', response.msg)
                                }
                                
                            },
                            failure: function() {
                                Ext.Msg.alert('Failed', 'Failed to Save')
                            }
                            
                        })

                    } else{
                        Ext.Msg.alert('Failed', "Please provide a valid link")
                    }
                    

                }
            },{
                text: 'Cancel',
                handler: function () {
                    addsubjectlinkwin.close()
                }
            }],
        }],
    });

    addsubjectlinkwin.show();

}

function viewVidTutorial(url, title) {

    var url = url.replace("watch?v=", "embed/")
    var vid_panel = Ext.create('Ext.panel.Panel', {
        title: "Course: "+title,
        id: 'vid_panel',
        layout: 'fit',
        iconCls: 'stranger-icon',
        closable:true,
        items: [{
            xtype : "component",
            html: "<iframe width='1080' height='590' "+"src="+url+" frameborder='0' allowfullscreen></iframe>"
        }]
    });

    return vid_panel
}


// Senior two admin

function seniortwo_admin() {
    var url = '/olevel/addsubjecttwo'
    var url_edit_subject = '/olevel/editsubjecttwo'
    var url_s2_subject = '/olevel/adds2subjectlink'
    var url_s2_edit_subject = '/olevel/edits2subjectlink'
    var subject_id, subject_name, subject_desc;
    var link_id , link_title, link, link_desc;

    var seniortwo_admin_settings =Ext.create('Ext.panel.Panel', {
        title: 'Senior Two',
        id: 'seniortwo_admin_settings',
        layout: 'border',
        iconCls: 'leveltwo-icon',
        items: [{
            xtype: 'gridpanel',
            region: 'west',
            width: '40%',
            title: 'Subjects',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s2subjects_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Subject', dataIndex: 'subject', flex: 30 / 100},
                {text: 'Registered On', dataIndex: 'registered_on', flex: 35 / 100},
                {text: 'Created by', dataIndex: 'registered_by', flex: 35 / 100},

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {notes}</p>'
                ],
            }],

            listeners: {

                itemclick: function(data, record, position){
                    subject_id = record.data.id;
                    subject_name = record.data.subject;
                    subject_desc = record.data.notes
                    seniortwo_admin_settings.getComponent(1).setTitle("Video Tutorials and Courses ("+
                        subject_name+")")

                    
                    Ext.getCmp("editsubject_2").setDisabled(false);
                    Ext.getCmp("deletesubject_2").setDisabled(false);

                    seniortwo_admin_settings.getComponent(1).store.getProxy().extraParams={subject_id: subject_id};
                    seniortwo_admin_settings.getComponent(1).store.loadPage(1);

                },

                itemdblclick: function(data, record, position){
                    editsubject(url_edit_subject, editsubject_2, s2subjects_store, subject_id, subject_name, subject_desc)
                }
            },
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Add',
                    iconCls: 'add-icon',
                    id: 'addsubject_2',
                    listeners: {
                        'click': function() {
                            addsubject(url, addsubject_2, s2subjects_store)
                        }
                    }
                },{
                    xtype: 'tbseparator'
                },{

                    xtype: 'button',
                    text: 'Edit',
                    iconCls: 'edit-icon',
                    disabled: true,
                    id: 'editsubject_2',
                    listeners: {
                        'click': function() {
                            editsubject(url_edit_subject, editsubject_2, s2subjects_store, subject_id, subject_name, subject_desc)
                        }
                    }

                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s2subjects_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Delete',
                    iconCls: 'remove-icon',
                    id: 'deletesubject_2',
                    disabled: true,
                    iconCls: 'remove-icon',
                    listeners: {
                        'click': function() {
                            deleteOlevelSubject(subject_id, subject_name, s2subjects_store, "S2")
                        }
                    }
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:30,
                    width: 200,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniortwo_admin_settings.getComponent(0).store.getProxy().extraParams={pattern: f.getValue()};
                            seniortwo_admin_settings.getComponent(0).store.loadPage(1);
                        }
                    }
                          
                }]
            },{

                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]

            }]
        },{
            xtype: 'gridpanel',
            region: 'east',
            width: '60%',
            title: 'Video Tutorials and Courses',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s2subjects_link_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Title', dataIndex: 'title', flex: 30 / 100},
                {text: 'Created By', dataIndex: 'registered_by', flex: 20 / 100},
                {text: 'Link', dataIndex: 'link', flex: 50 / 100},

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Title:</b> {title}</p>',
                    '<p><b>Registered On:</b> {registered_on}</p>',
                    '<p><b>Created By:</b> {registered_by}</p>',
                    '<p><b>Description:</b> {description}</p>'
                ],
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Add',
                    iconCls: 'add-icon',
                    id: 'addsubject_2_links',
                    listeners: {
                        'click': function() {
                            if (subject_id==null) {
                                Ext.Msg.alert('Error', "Select subject first")
                            }else {
                                addsubjectlinkwin(url_s2_subject, addsubject_2_links, subject_id, subject_name, s2subjects_link_store)
                            }
                            
                        }
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Edit',
                    disabled: true,
                    iconCls: 'edit-icon',
                    id: 'editsubject_2_links',
                    listeners: {
                        'click': function() {
                            editsubjectlinkwin(url_s2_edit_subject, editsubject_2_links, link_id, subject_name, link_title, link, link_desc, s2subjects_link_store)
                        }
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s2subjects_link_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Delete Message',
                    id: 'deletesubject_2_links',
                    disabled: true,
                    iconCls: 'remove-icon',
                    listeners: {
                        'click': function() {
                            deleteOlevelSubjectLink(link_id, link_title, s2subjects_link_store, "S2")
                        }
                    }
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:50,
                    width: 250,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniortwo_admin_settings.getComponent(1).store.getProxy().extraParams={pattern: f.getValue(),subject_id: subject_id};
                            seniortwo_admin_settings.getComponent(1).store.loadPage(1);
                        }
                    }
                          
                }]
            },{
                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]
                
            }],

            listeners: {

                itemclick: function(data, record, position){
                    Ext.getCmp('editsubject_2_links').setDisabled(false)
                    Ext.getCmp('deletesubject_2_links').setDisabled(false)
                    link_id = record.data.id
                    link = record.data.link
                    link_title = record.data.title
                    link_desc = record.data.description
                },
                itemdblclick: function(data, record, position){

                    Ext.getCmp('editsubject_2_links').setDisabled(false)

                    link_id = record.data.id
                    link = record.data.link
                    title = record.data.title
                    link_desc = record.data.description

                    if(mycenterTab.getComponent(viewVidTutorial(link, title))==undefined){
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }else{
                        mycenterTab.remove(viewVidTutorial(link, title))
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }

                }
            }
        }]
    })
    return seniortwo_admin_settings
}


function seniorthree_admin() {
    var url = '/olevel/addsubjectthree'
    var url_edit_subject = '/olevel/editsubjectthree'
    var url_s3_subject = '/olevel/adds3subjectlink'
    var url_s3_edit_subject = '/olevel/edits3subjectlink'
    var subject_id;
    var subject_name;
    var subject_notes;
    var link_id , link_title, link, link_desc;

    var seniorthree_admin_settings =Ext.create('Ext.panel.Panel', {
        title: 'Senior Three',
        id: 'seniorthree_admin_settings',
        layout: 'border',
        iconCls: 'levelthree-icon',
        items: [{
            xtype: 'gridpanel',
            region: 'west',
            width: '40%',
            title: 'Subjects',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s3subjects_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Subject', dataIndex: 'subject', flex: 30 / 100},
                {text: 'Registered On', dataIndex: 'registered_on', flex: 35 / 100},
                {text: 'Created by', dataIndex: 'registered_by', flex: 35 / 100},

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {notes}</p>'
                ],
            }],

            listeners: {

                itemclick: function(data, record, position){
                    subject_id = record.data.id;
                    subject_name = record.data.subject;
                    subject_notes = record.data.notes
                    seniorthree_admin_settings.getComponent(1).setTitle("Video Tutorials and Courses ("+
                        subject_name+")")

                    
                    Ext.getCmp("editsubject_3").setDisabled(false);
                    Ext.getCmp("deletesubject_3").setDisabled(false);

                    seniorthree_admin_settings.getComponent(1).store.getProxy().extraParams={subject_id: subject_id};
                    seniorthree_admin_settings.getComponent(1).store.loadPage(1);

                },

                itemdblclick: function(data, record, position){
                    editsubject(url_edit_subject, editsubject_3, s3subjects_store, subject_id, subject_name, subject_notes)
                }
            },
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Add',
                    iconCls: 'add-icon',
                    id: 'addsubject_3',
                    listeners: {
                        'click': function() {
                            addsubject(url, addsubject_3, s3subjects_store)
                        }
                    }
                },{
                    xtype: 'tbseparator'
                },{

                    xtype: 'button',
                    text: 'Edit',
                    iconCls: 'edit-icon',
                    disabled: true,
                    id: 'editsubject_3',
                    listeners: {
                        'click': function() {
                            editsubject(url_edit_subject, editsubject_3, s3subjects_store, subject_id, subject_name, subject_notes)
                        }
                    }

                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s3subjects_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Delete',
                    iconCls: 'remove-icon',
                    id: 'deletesubject_3',
                    disabled: true,
                    iconCls: 'remove-icon',
                    listeners: {
                        'click': function() {
                            deleteOlevelSubject(subject_id, subject_name, s3subjects_store, "S3")
                        }
                    }
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:30,
                    width: 200,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorthree_admin_settings.getComponent(0).store.getProxy().extraParams={pattern: f.getValue()};
                            seniorthree_admin_settings.getComponent(0).store.loadPage(1);
                        }
                    }
                          
                }]
            },{

                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]

            }]
        },{
            xtype: 'gridpanel',
            region: 'east',
            width: '60%',
            title: 'Video Tutorials and Courses',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s3subjects_link_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Title', dataIndex: 'title', flex: 30 / 100},
                {text: 'Created By', dataIndex: 'registered_by', flex: 20 / 100},
                {text: 'Link', dataIndex: 'link', flex: 50 / 100},

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Title:</b> {title}</p>',
                    '<p><b>Registered On:</b> {registered_on}</p>',
                    '<p><b>Created By:</b> {registered_by}</p>',
                    '<p><b>Description:</b> {description}</p>'
                ],
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Add',
                    iconCls: 'add-icon',
                    id: 'addsubject_3_links',
                    listeners: {
                        'click': function() {
                            if (subject_id==null) {
                                Ext.Msg.alert('Error', "Select subject first")
                            }else{
                                addsubjectlinkwin(url_s3_subject, addsubject_3_links, subject_id, subject_name, s3subjects_link_store)
                            }
                            
                        }
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Edit',
                    disabled: true,
                    iconCls: 'edit-icon',
                    id: 'editsubject_3_links',
                    listeners: {
                        'click': function() {
                            editsubjectlinkwin(url_s3_edit_subject, editsubject_3_links, link_id, subject_name, link_title, link, link_desc, s3subjects_link_store)
                        }
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s3subjects_link_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Delete Message',
                    id: 'deletesubject_3_links',
                    disabled: true,
                    iconCls: 'remove-icon',
                    listeners: {
                        'click': function() {
                            deleteOlevelSubjectLink(link_id, link_title, s3subjects_link_store, "S3")
                        }
                    }
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:50,
                    width: 250,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorthree_admin_settings.getComponent(1).store.getProxy().extraParams={pattern: f.getValue(),subject_id: subject_id};
                            seniorthree_admin_settings.getComponent(1).store.loadPage(1);
                        }
                    }
                          
                }]
            },{
                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]
                
            }],

            listeners: {

                itemclick: function(data, record, position){

                    Ext.getCmp("editsubject_3_links").setDisabled(false);
                    Ext.getCmp("deletesubject_3_links").setDisabled(false);

                    link_id = record.data.id
                    link = record.data.link
                    link_title = record.data.title
                    link_desc = record.data.description

                },
                itemdblclick: function(data, record, position){

                    var link = record.data.link
                    var title = record.data.title

                    if(mycenterTab.getComponent(viewVidTutorial(link, title))==undefined){
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }else{
                        mycenterTab.remove(viewVidTutorial(link, title))
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }

                }
            }
        }]
    })
    return seniorthree_admin_settings
}



// senior four

function seniorfour_admin() {
    var url = '/alevel/addsubjectfour'
    var url_edit_subject = '/alevel/editsubjectfour'
    var url_s4_subject = '/alevel/adds4subjectlink'
    var url_s4_edit_subject = '/alevel/edits4subjectlink'

    var subject_id;
    var subject_name;
    var subject_desc;

    var link_id , link_title, link, link_desc;

    var seniorfour_admin_settings =Ext.create('Ext.panel.Panel', {
        title: 'Senior Four',
        id: 'seniorfour_admin_settings',
        layout: 'border',
        iconCls: 'levelfour-icon',
        items: [{
            xtype: 'gridpanel',
            region: 'west',
            width: '40%',
            title: 'Subjects',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s4subjects_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Subject', dataIndex: 'subject', flex: 30 / 100},
                {text: 'Registered On', dataIndex: 'registered_on', flex: 35 / 100},
                {text: 'Created by', dataIndex: 'registered_by', flex: 35 / 100},

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {notes}</p>'
                ],
            }],

            listeners: {

                itemclick: function(data, record, position){
                    subject_id = record.data.id;
                    subject_name = record.data.subject;
                    subject_desc = record.data.notes

                    seniorfour_admin_settings.getComponent(1).setTitle("Video Tutorials and Courses ("+
                        subject_name+")")

                   
                    Ext.getCmp("editsubject_4").setDisabled(false);
                    Ext.getCmp("deletesubject_4").setDisabled(false);

                    seniorfour_admin_settings.getComponent(1).store.getProxy().extraParams={subject_id: subject_id};
                    seniorfour_admin_settings.getComponent(1).store.loadPage(1);

                },

                itemdblclick: function(data, record, position){
                    editsubject(url_edit_subject, editsubject_4, s4subjects_store, subject_id, subject_name, subject_desc)
                }
            },
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Add',
                    iconCls: 'add-icon',
                    id: 'addsubject_4',
                    listeners: {
                        'click': function() {
                            addsubject(url, addsubject_4, s4subjects_store)
                        }
                    }
                },{
                    xtype: 'tbseparator'
                },{

                    xtype: 'button',
                    text: 'Edit',
                    iconCls: 'edit-icon',
                    disabled: true,
                    id: 'editsubject_4',
                    listeners: {
                        'click': function() {
                            editsubject(url_edit_subject, editsubject_4, s4subjects_store, subject_id, subject_name, subject_desc)
                        }
                    }

                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s4subjects_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Delete',
                    iconCls: 'remove-icon',
                    id: 'deletesubject_4',
                    disabled: true,
                    iconCls: 'remove-icon',
                    listeners: {
                        'click': function() {
                            deleteAlevelSubject(subject_id, subject_name, s4subjects_store, "S4")
                        }
                    }
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:30,
                    width: 200,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorfour_admin_settings.getComponent(0).store.getProxy().extraParams={pattern: f.getValue()};
                            seniorfour_admin_settings.getComponent(0).store.loadPage(1);
                        }
                    }
                          
                }]
            },{

                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]

            }]
        },{
            xtype: 'gridpanel',
            region: 'east',
            width: '60%',
            title: 'Video Tutorials and Courses',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s4subjects_link_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Title', dataIndex: 'title', flex: 30 / 100},
                {text: 'Created By', dataIndex: 'registered_by', flex: 20 / 100},
                {text: 'Link', dataIndex: 'link', flex: 50 / 100},

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Title:</b> {title}</p>',
                    '<p><b>Registered On:</b> {registered_on}</p>',
                    '<p><b>Created By:</b> {registered_by}</p>',
                    '<p><b>Description:</b> {description}</p>'
                ],
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Add',
                    iconCls: 'add-icon',
                    id: 'addsubject_4_links',
                    listeners: {
                        'click': function() {
                            if (subject_id==null) {
                                Ext.Msg.alert('Error', "Select subject first")
                            } else {
                                addsubjectlinkwin(url_s4_subject, addsubject_4_links, subject_id, subject_name, s4subjects_link_store)
                            }
                            
                        }
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Edit',
                    disabled: true,
                    iconCls: 'edit-icon',
                    id: 'editsubject_4_links',
                    listeners: {
                        'click': function() {
                            editsubjectlinkwin(url_s4_edit_subject, editsubject_4_links, link_id, subject_name, link_title, link, link_desc, s4subjects_link_store)
                        }
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s4subjects_link_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Delete Message',
                    id: 'deletesubject_4_links',
                    disabled: true,
                    iconCls: 'remove-icon',
                    listeners: {
                        'click': function() {
                            deleteAlevelSubjectLink(link_id, link_title, s4subjects_link_store, "S4")
                        }
                    }
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:50,
                    width: 250,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorfour_admin_settings.getComponent(1).store.getProxy().extraParams={pattern: f.getValue(),subject_id: subject_id};
                            seniorfour_admin_settings.getComponent(1).store.loadPage(1);
                        }
                    }
                          
                }]
            },{
                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]
                
            }],

            listeners: {

                itemclick: function(data, record, position){

                    Ext.getCmp("editsubject_4_links").setDisabled(false)
                    Ext.getCmp("deletesubject_4_links").setDisabled(false)
                    
                    link_id = record.data.id
                    link = record.data.link
                    link_title = record.data.title
                    link_desc = record.data.description

                },

                itemdblclick: function(data, record, position){

                    var link = record.data.link
                    var title = record.data.title

                    if(mycenterTab.getComponent(viewVidTutorial(link, title))==undefined){
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }else{
                        mycenterTab.remove(viewVidTutorial(link, title))
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }
                }
            }
        }]
    })
    return seniorfour_admin_settings
}


// Senior five

function seniorfive_admin() {
    var url = '/alevel/addsubjectfive'
    var url_edit_subject = '/alevel/editsubjectfive'
    var url_s5_subject = '/alevel/adds5subjectlink'
    var url_s5_edit_subject = '/alevel/edits5subjectlink'
    var subject_id;
    var subject_name;
    var subject_desc;

    var link_id , link_title, link, link_desc;

    var seniorfive_admin_settings =Ext.create('Ext.panel.Panel', {
        title: 'Senior Five',
        id: 'seniorfive_admin_settings',
        layout: 'border',
        iconCls: 'levelfive-icon',
        items: [{
            xtype: 'gridpanel',
            region: 'west',
            width: '40%',
            title: 'Subjects',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s5subjects_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Subject', dataIndex: 'subject', flex: 30 / 100},
                {text: 'Registered On', dataIndex: 'registered_on', flex: 35 / 100},
                {text: 'Created by', dataIndex: 'registered_by', flex: 35 / 100},

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {notes}</p>'
                ],
            }],

            listeners: {

                itemclick: function(data, record, position){
                    subject_id = record.data.id;
                    subject_name = record.data.subject;
                    subject_desc = record.data.notes;
                    seniorfive_admin_settings.getComponent(1).setTitle("Video Tutorials and Courses ("+
                        subject_name+")")

                    
                    Ext.getCmp("editsubject_5").setDisabled(false);
                    Ext.getCmp("deletesubject_5").setDisabled(false);

                    seniorfive_admin_settings.getComponent(1).store.getProxy().extraParams={subject_id: subject_id};
                    seniorfive_admin_settings.getComponent(1).store.loadPage(1);

                },
                itemdblclick: function(data, record, position){
                    editsubject(url_edit_subject, editsubject_5, s5subjects_store, subject_id, subject_name, subject_desc)
                }
            },
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Add',
                    iconCls: 'add-icon',
                    id: 'addsubject_5',
                    listeners: {
                        'click': function() {
                            addsubject(url, addsubject_5, s5subjects_store)
                        }
                    }
                },{
                    xtype: 'tbseparator'
                },{

                    xtype: 'button',
                    text: 'Edit',
                    iconCls: 'edit-icon',
                    disabled: true,
                    id: 'editsubject_5',
                    listeners: {
                        'click': function() {
                            editsubject(url_edit_subject, editsubject_5, s5subjects_store, subject_id, subject_name, subject_desc)
                        }
                    }

                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s5subjects_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Delete',
                    iconCls: 'remove-icon',
                    id: 'deletesubject_5',
                    disabled: true,
                    iconCls: 'remove-icon',
                    listeners: {
                        'click': function() {
                            deleteAlevelSubject(subject_id, subject_name, s5subjects_store, "S5")
                        }
                    }
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:30,
                    width: 200,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorfive_admin_settings.getComponent(0).store.getProxy().extraParams={pattern: f.getValue()};
                            seniorfive_admin_settings.getComponent(0).store.loadPage(1);
                        }
                    }
                          
                }]
            },{

                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]

            }]
        },{
            xtype: 'gridpanel',
            region: 'east',
            width: '60%',
            title: 'Video Tutorials and Courses',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s5subjects_link_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Title', dataIndex: 'title', flex: 30 / 100},
                {text: 'Created By', dataIndex: 'registered_by', flex: 20 / 100},
                {text: 'Link', dataIndex: 'link', flex: 50 / 100},

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Title:</b> {title}</p>',
                    '<p><b>Registered On:</b> {registered_on}</p>',
                    '<p><b>Created By:</b> {registered_by}</p>',
                    '<p><b>Description:</b> {description}</p>'
                ],
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Add',
                    iconCls: 'add-icon',
                    id: 'addsubject_5_links',
                    listeners: {
                        'click': function() {
                            if (subject_id==null) {
                                Ext.Msg.alert('Error', "Select subject first")
                            } else {
                                addsubjectlinkwin(url_s5_subject, addsubject_5_links, subject_id, subject_name, s5subjects_link_store)
                            }
                            
                        }
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Edit',
                    disabled: true,
                    iconCls: 'edit-icon',
                    id: 'editsubject_5_links',
                    listeners: {
                        'click': function() {
                            editsubjectlinkwin(url_s5_edit_subject, editsubject_5_links, link_id, subject_name, link_title, link, link_desc, s5subjects_link_store)
                        }
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s5subjects_link_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Delete',
                    id: 'deletesubject_5_links',
                    disabled: true,
                    iconCls: 'remove-icon',
                    listeners: {
                        'click': function() {
                            deleteAlevelSubjectLink(link_id, link_title, s5subjects_link_store, "S5")
                        }
                    }
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:50,
                    width: 250,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorfive_admin_settings.getComponent(1).store.getProxy().extraParams={pattern: f.getValue(),subject_id: subject_id};
                            seniorfive_admin_settings.getComponent(1).store.loadPage(1);
                        }
                    }
                          
                }]
            },{
                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]
                
            }],

            listeners: {

                itemclick: function(data, record, position){

                    Ext.getCmp("editsubject_5_links").setDisabled(false)
                    Ext.getCmp("deletesubject_5_links").setDisabled(false)

                    link_id = record.data.id
                    link = record.data.link
                    link_title = record.data.title
                    link_desc = record.data.description

                },
                itemdblclick: function(data, record, position){

                    var link = record.data.link
                    var title = record.data.title

                    if(mycenterTab.getComponent(viewVidTutorial(link, title))==undefined){
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }else{
                        mycenterTab.remove(viewVidTutorial(link, title))
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }
                }
            }
        }]
    })
    return seniorfive_admin_settings
}

// Senior six

function seniorsix_admin() {
    var url = '/alevel/addsubjectsix'
    var url_edit_subject = '/alevel/editsubjectsix'

    var url_s6_subject = '/alevel/adds6subjectlink'
    var url_s6_edit_subject = '/alevel/edits6subjectlink'

    var subject_id;
    var subject_name;
    var subject_desc;

    var link_id , link_title, link, link_desc;

    var seniorsix_admin_settings =Ext.create('Ext.panel.Panel', {
        title: 'Senior Six',
        id: 'seniorsix_admin_settings',
        layout: 'border',
        iconCls: 'levelsix-icon',
        items: [{
            xtype: 'gridpanel',
            region: 'west',
            width: '40%',
            title: 'Subjects',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s6subjects_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Subject', dataIndex: 'subject', flex: 30 / 100},
                {text: 'Registered On', dataIndex: 'registered_on', flex: 35 / 100},
                {text: 'Created by', dataIndex: 'registered_by', flex: 35 / 100},

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {notes}</p>'
                ],
            }],

            listeners: {

                itemclick: function(data, record, position){
                    subject_id = record.data.id;
                    subject_name = record.data.subject;
                    subject_desc = record.data.notes;
                    seniorsix_admin_settings.getComponent(1).setTitle("Video Tutorials and Courses ("+
                        subject_name+")")

                    
                    Ext.getCmp("editsubject_6").setDisabled(false);
                    Ext.getCmp("deletesubject_6").setDisabled(false);

                    seniorsix_admin_settings.getComponent(1).store.getProxy().extraParams={subject_id: subject_id};
                    seniorsix_admin_settings.getComponent(1).store.loadPage(1);

                },

                itemdblclick: function(data, record, position){
                    editsubject(url_edit_subject, editsubject_6, s6subjects_store, subject_id, subject_name, subject_desc)
                }
            },
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Add',
                    iconCls: 'add-icon',
                    id: 'addsubject_6',
                    listeners: {
                        'click': function() {
                            addsubject(url, addsubject_6, s6subjects_store)
                        }
                    }
                },{
                    xtype: 'tbseparator'
                },{

                    xtype: 'button',
                    text: 'Edit',
                    iconCls: 'edit-icon',
                    disabled: true,
                    id: 'editsubject_6',
                    listeners: {
                        'click': function() {
                            editsubject(url_edit_subject, editsubject_6, s6subjects_store, subject_id, subject_name, subject_desc)
                        }
                    }

                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s6subjects_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Delete',
                    iconCls: 'remove-icon',
                    id: 'deletesubject_6',
                    disabled: true,
                    iconCls: 'remove-icon',
                    listeners: {
                        'click': function() {
                            deleteAlevelSubject(subject_id, subject_name, s6subjects_store, "S6")
                        }
                    }
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:30,
                    width: 200,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorsix_admin_settings.getComponent(0).store.getProxy().extraParams={pattern: f.getValue()};
                            seniorsix_admin_settings.getComponent(0).store.loadPage(1);
                        }
                    }
                          
                }]
            },{

                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]

            }]
        },{
            xtype: 'gridpanel',
            region: 'east',
            width: '60%',
            title: 'Video Tutorials and Courses',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s6subjects_link_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Title', dataIndex: 'title', flex: 30 / 100},
                {text: 'Created By', dataIndex: 'registered_by', flex: 20 / 100},
                {text: 'Link', dataIndex: 'link', flex: 50 / 100},

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Title:</b> {title}</p>',
                    '<p><b>Registered On:</b> {registered_on}</p>',
                    '<p><b>Created By:</b> {registered_by}</p>',
                    '<p><b>Description:</b> {description}</p>'
                ],
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Add',
                    iconCls: 'add-icon',
                    id: 'addsubject_6_links',
                    listeners: {
                        'click': function() {
                            if (subject_id==null) {
                                Ext.Msg.alert('Error', "Select subject first")
                            } else{
                                addsubjectlinkwin(url_s6_subject, addsubject_6_links, subject_id, subject_name, s6subjects_link_store)
                            }
                            
                        }
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Edit',
                    disabled: true,
                    iconCls: 'edit-icon',
                    id: 'editsubject_6_links',
                    listeners: {
                        'click': function() {
                            editsubjectlinkwin(url_s6_edit_subject, editsubject_6_links, link_id, subject_name, link_title, link, link_desc, s6subjects_link_store)
                        }
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s6subjects_link_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },{
                    xtype: 'button',
                    text: 'Delete',
                    id: 'deletesubject_6_links',
                    disabled: true,
                    iconCls: 'remove-icon',
                    listeners: {
                        'click': function() {
                            deleteAlevelSubjectLink(link_id, link_title, s6subjects_link_store, "S6")
                        }
                    }
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:50,
                    width: 250,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorsix_admin_settings.getComponent(1).store.getProxy().extraParams={pattern: f.getValue(),subject_id: subject_id};
                            seniorsix_admin_settings.getComponent(1).store.loadPage(1);
                        }
                    }
                          
                }]
            },{
                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]
                
            }],

            listeners: {

                itemclick: function(data, record, position){

                    Ext.getCmp("editsubject_6_links").setDisabled(false)
                    Ext.getCmp("deletesubject_6_links").setDisabled(false)

                    link_id = record.data.id
                    link = record.data.link
                    link_title = record.data.title
                    link_desc = record.data.description

                },
                itemdblclick: function(data, record, position){
                    
                    var link = record.data.link
                    var title = record.data.title
                    
                    if(mycenterTab.getComponent(viewVidTutorial(link, title))==undefined){
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }else{
                        mycenterTab.remove(viewVidTutorial(link, title))
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }
                    
                }
            }
        }]
    })
    return seniorsix_admin_settings
}



function seniorone_student() {
    
    var subject_id;
    var subject_name;

    var seniorone_student_access =Ext.create('Ext.panel.Panel', {
        title: 'Senior One',
        id: 'seniorone_student_access',
        layout: 'border',
        iconCls: 'levelone-icon',
        items: [{
            xtype: 'gridpanel',
            region: 'west',
            width: '40%',
            title: 'Subjects',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s1subjects_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Subject', dataIndex: 'subject', flex: 30 / 100},

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {notes}</p>'
                ],
            }],

            listeners: {

                itemclick: function(data, record, position){
                    subject_id = record.data.id;
                    subject_name = record.data.subject;
                    seniorone_student_access.getComponent(1).setTitle("Video Tutorials and Courses ("+
                        subject_name+")")

                    seniorone_student_access.getComponent(1).store.getProxy().extraParams={subject_id: subject_id};
                    seniorone_student_access.getComponent(1).store.loadPage(1);

                },
            },
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s1subjects_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:30,
                    width: 200,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorone_student_access.getComponent(0).store.getProxy().extraParams={pattern: f.getValue()};
                            seniorone_student_access.getComponent(0).store.loadPage(1);
                        }
                    }
                          
                }]
            },{

                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]

            }]
        },{
            xtype: 'gridpanel',
            region: 'east',
            width: '60%',
            title: 'Video Tutorials and Courses',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s1subjects_link_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Title', dataIndex: 'title', flex: 30 / 100},

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {description}</p>'
                ],
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s1subjects_link_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:50,
                    width: 250,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorone_student_access.getComponent(1).store.getProxy().extraParams={pattern: f.getValue(),subject_id: subject_id};
                            seniorone_student_access.getComponent(1).store.loadPage(1);
                        }
                    }
                          
                }]
            },{
                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]
                
            }],

            listeners: {
                itemdblclick: function(data, record, position){
                    var link = record.data.link
                    var title = record.data.title

                    if(mycenterTab.getComponent(viewVidTutorial(link, title))==undefined){
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }else{
                        mycenterTab.remove(viewVidTutorial(link, title))
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }
                }
            }
        }]
    })
    return seniorone_student_access
}

function seniortwo_student() {
    var subject_id;
    var subject_name;

    var seniortwo_student_access =Ext.create('Ext.panel.Panel', {
        title: 'Senior Two',
        id: 'seniortwo_student_access',
        layout: 'border',
        iconCls: 'leveltwo-icon',
        items: [{
            xtype: 'gridpanel',
            region: 'west',
            width: '40%',
            title: 'Subjects',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s2subjects_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Subject', dataIndex: 'subject', flex: 30 / 100},

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {notes}</p>'
                ],
            }],

            listeners: {

                itemclick: function(data, record, position){
                    subject_id = record.data.id;
                    subject_name = record.data.subject;
                    seniortwo_student_access.getComponent(1).setTitle("Video Tutorials and Courses ("+
                        subject_name+")")

                    seniortwo_student_access.getComponent(1).store.getProxy().extraParams={subject_id: subject_id};
                    seniortwo_student_access.getComponent(1).store.loadPage(1);

                },
            },
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s2subjects_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:30,
                    width: 200,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniortwo_student_access.getComponent(0).store.getProxy().extraParams={pattern: f.getValue()};
                            seniortwo_student_access.getComponent(0).store.loadPage(1);
                        }
                    }
                          
                }]
            },{

                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]

            }]
        },{
            xtype: 'gridpanel',
            region: 'east',
            width: '60%',
            title: 'Video Tutorials and Courses',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s2subjects_link_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Title', dataIndex: 'title', flex: 30 / 100}

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {description}</p>'
                ],
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s2subjects_link_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:50,
                    width: 250,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniortwo_student_access.getComponent(1).store.getProxy().extraParams={pattern: f.getValue(),subject_id: subject_id};
                            seniortwo_student_access.getComponent(1).store.loadPage(1);
                        }
                    }
                          
                }]
            },{
                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]
                
            }],

            listeners: {
                itemdblclick: function(data, record, position){

                    var link = record.data.link
                    var title = record.data.title

                    if(mycenterTab.getComponent(viewVidTutorial(link, title))==undefined){
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }else{
                        mycenterTab.remove(viewVidTutorial(link, title))
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }

                }
            }
        }]
    })
    return seniortwo_student_access
}

function seniorthree_student() {
    var subject_id;
    var subject_name;

    var seniorthree_student_access=Ext.create('Ext.panel.Panel', {
        title: 'Senior Three',
        id: 'seniorthree_student_access',
        layout: 'border',
        iconCls: 'levelthree-icon',
        items: [{
            xtype: 'gridpanel',
            region: 'west',
            width: '40%',
            title: 'Subjects',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s3subjects_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Subject', dataIndex: 'subject', flex: 30 / 100}

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {notes}</p>'
                ],
            }],

            listeners: {

                itemclick: function(data, record, position){
                    subject_id = record.data.id;
                    subject_name = record.data.subject;
                    seniorthree_student_access.getComponent(1).setTitle("Video Tutorials and Courses ("+
                        subject_name+")")

                    seniorthree_student_access.getComponent(1).store.getProxy().extraParams={subject_id: subject_id};
                    seniorthree_student_access.getComponent(1).store.loadPage(1);

                },
            },
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s3subjects_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:30,
                    width: 200,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorthree_student_access.getComponent(0).store.getProxy().extraParams={pattern: f.getValue()};
                            seniorthree_student_access.getComponent(0).store.loadPage(1);
                        }
                    }
                          
                }]
            },{

                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]

            }]
        },{
            xtype: 'gridpanel',
            region: 'east',
            width: '60%',
            title: 'Video Tutorials and Courses',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s3subjects_link_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Title', dataIndex: 'title', flex: 30 / 100}

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {description}</p>'
                ],
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s3subjects_link_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:50,
                    width: 250,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorthree_student_access.getComponent(1).store.getProxy().extraParams={pattern: f.getValue(),subject_id: subject_id};
                            seniorthree_student_access.getComponent(1).store.loadPage(1);
                        }
                    }
                          
                }]
            },{
                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]
                
            }],

            listeners: {
                itemdblclick: function(data, record, position){

                    var link = record.data.link
                    var title = record.data.title

                    if(mycenterTab.getComponent(viewVidTutorial(link, title))==undefined){
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }else{
                        mycenterTab.remove(viewVidTutorial(link, title))
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }

                }
            }
        }]
    })
    return seniorthree_student_access
}


function seniorfour_student() {
    var subject_id;
    var subject_name;

    var seniorfour_student_access =Ext.create('Ext.panel.Panel', {
        title: 'Senior Four',
        id: 'seniorfour_student_access',
        layout: 'border',
        iconCls: 'levelfour-icon',
        items: [{
            xtype: 'gridpanel',
            region: 'west',
            width: '40%',
            title: 'Subjects',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s4subjects_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Subject', dataIndex: 'subject', flex: 30 / 100}

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {notes}</p>'
                ],
            }],

            listeners: {

                itemclick: function(data, record, position){
                    subject_id = record.data.id;
                    subject_name = record.data.subject;
                    seniorfour_student_access.getComponent(1).setTitle("Video Tutorials and Courses ("+
                        subject_name+")")

                    seniorfour_student_access.getComponent(1).store.getProxy().extraParams={subject_id: subject_id};
                    seniorfour_student_access.getComponent(1).store.loadPage(1);

                },
            },
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s4subjects_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:30,
                    width: 200,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorfour_student_access.getComponent(0).store.getProxy().extraParams={pattern: f.getValue()};
                            seniorfour_student_access.getComponent(0).store.loadPage(1);
                        }
                    }
                          
                }]
            },{

                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]

            }]
        },{
            xtype: 'gridpanel',
            region: 'east',
            width: '60%',
            title: 'Video Tutorials and Courses',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s4subjects_link_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Title', dataIndex: 'title', flex: 30 / 100}

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {description}</p>'
                ],
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s4subjects_link_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:50,
                    width: 250,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorfour_student_access.getComponent(1).store.getProxy().extraParams={pattern: f.getValue(),subject_id: subject_id};
                            seniorfour_student_access.getComponent(1).store.loadPage(1);
                        }
                    }
                          
                }]
            },{
                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]
                
            }],

            listeners: {
                itemdblclick: function(data, record, position){

                    var link = record.data.link
                    var title = record.data.title

                    if(mycenterTab.getComponent(viewVidTutorial(link, title))==undefined){
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }else{
                        mycenterTab.remove(viewVidTutorial(link, title))
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }
                }
            }
        }]
    })
    return seniorfour_student_access
}

function seniorfive_student() {
    var subject_id;
    var subject_name;

    var seniorfive_student_access=Ext.create('Ext.panel.Panel', {
        title: 'Senior Five',
        id: 'seniorfive_student_access',
        layout: 'border',
        iconCls: 'levelfive-icon',
        items: [{
            xtype: 'gridpanel',
            region: 'west',
            width: '40%',
            title: 'Subjects',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s5subjects_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Subject', dataIndex: 'subject', flex: 30 / 100}

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {notes}</p>'
                ],
            }],

            listeners: {

                itemclick: function(data, record, position){
                    subject_id = record.data.id;
                    subject_name = record.data.subject;
                    seniorfive_student_access.getComponent(1).setTitle("Video Tutorials and Courses ("+
                        subject_name+")")

                    seniorfive_student_access.getComponent(1).store.getProxy().extraParams={subject_id: subject_id};
                    seniorfive_student_access.getComponent(1).store.loadPage(1);

                },
            },
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s5subjects_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:30,
                    width: 200,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorfive_student_access.getComponent(0).store.getProxy().extraParams={pattern: f.getValue()};
                            seniorfive_student_access.getComponent(0).store.loadPage(1);
                        }
                    }
                          
                }]
            },{

                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]

            }]
        },{
            xtype: 'gridpanel',
            region: 'east',
            width: '60%',
            title: 'Video Tutorials and Courses',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s5subjects_link_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Title', dataIndex: 'title', flex: 30 / 100}

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {description}</p>'
                ],
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s5subjects_link_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:50,
                    width: 250,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorfive_student_access.getComponent(1).store.getProxy().extraParams={pattern: f.getValue(),subject_id: subject_id};
                            seniorfive_student_access.getComponent(1).store.loadPage(1);
                        }
                    }
                          
                }]
            },{
                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]
                
            }],

            listeners: {
                itemdblclick: function(data, record, position){

                    var link = record.data.link
                    var title = record.data.title

                    if(mycenterTab.getComponent(viewVidTutorial(link, title))==undefined){
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }else{
                        mycenterTab.remove(viewVidTutorial(link, title))
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }
                }
            }
        }]
    })
    return seniorfive_student_access
}

function seniorsix_student() {
    var subject_id;
    var subject_name;

    var seniorsix_student_access =Ext.create('Ext.panel.Panel', {
        title: 'Senior Six',
        id: 'seniorsix_student_access',
        layout: 'border',
        iconCls: 'levelsix-icon',
        items: [{
            xtype: 'gridpanel',
            region: 'west',
            width: '40%',
            title: 'Subjects',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s6subjects_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Subject', dataIndex: 'subject', flex: 30 / 100}

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {notes}</p>'
                ],
            }],

            listeners: {

                itemclick: function(data, record, position){
                    subject_id = record.data.id;
                    subject_name = record.data.subject;
                    seniorsix_student_access.getComponent(1).setTitle("Video Tutorials and Courses ("+
                        subject_name+")")

                    seniorsix_student_access.getComponent(1).store.getProxy().extraParams={subject_id: subject_id};
                    seniorsix_student_access.getComponent(1).store.loadPage(1);

                },
            },
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s6subjects_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:30,
                    width: 200,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorsix_student_access.getComponent(0).store.getProxy().extraParams={pattern: f.getValue()};
                            seniorsix_student_access.getComponent(0).store.loadPage(1);
                        }
                    }
                          
                }]
            },{

                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]

            }]
        },{
            xtype: 'gridpanel',
            region: 'east',
            width: '60%',
            title: 'Video Tutorials and Courses',
            margins: '-1 -1 -1 -1',
            columnLines: true,
            store: s6subjects_link_store,
            columns: [
                {xtype: 'rownumberer'},        
                {text: 'Title', dataIndex: 'title', flex: 30 / 100}

            ],
            plugins: [{
                ptype: 'rowexpander',
                frame: true,
                rowBodyTpl : [
                    '<p><b>Description:</b> {description}</p>'
                ],
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'button',
                    text: 'Refresh',
                    iconCls: 'refresh-icon',
                    action: 'refresh',
                    handler: function() {
                        s6subjects_link_store.reload()
                    }
                },{
                    xtype: 'tbseparator'
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:50,
                    width: 250,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            seniorsix_student_access.getComponent(1).store.getProxy().extraParams={pattern: f.getValue(),subject_id: subject_id};
                            seniorsix_student_access.getComponent(1).store.loadPage(1);
                        }
                    }
                          
                }]
            },{
                dock: 'bottom',
                items: [{
                    xtype: 'pagingtoolbar',
                    pageSize: 2,
                    displayInfo : true,
                    displayMsg : "Displaying items {0} - {1} of {2}",
                    emptyMsg : "No items Available",
                }]
                
            }],

            listeners: {
                itemdblclick: function(data, record, position){
                    
                    var link = record.data.link
                    var title = record.data.title
                    
                    if(mycenterTab.getComponent(viewVidTutorial(link, title))==undefined){
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }else{
                        mycenterTab.remove(viewVidTutorial(link, title))
                        mycenterTab.add(viewVidTutorial(link, title)).show()
                    }
                    
                }
            }
        }]
    })
    return seniorsix_student_access
}



function editsubjectlinkwin(url, id, link_id, subject_name, title, link, desc, store) {

    var editsubjectlinkwin = Ext.create('Ext.window.Window', {
        title: 'Edit Subject Link',
        iconCls: 'edit-icon',
        animateTarget: id,
        modal: true,
        items: [{
            xtype: 'form',
            frame: true,
            id: 'editsubjectlinkform',
            items: [{
                xtype: 'container',
                layout: 'hbox',
                items: [{
                    xtype: 'fieldset',
                    title: 'Form Details',
                    width: 300,
                    items: [{
                        xtype: 'textfield',
                        labelAlign: 'top',
                        fieldLabel: 'Subject',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 275,
                        value: subject_name,
                        readOnly: true,

                    },{
                        xtype: 'textfield',
                        labelAlign: 'top',
                        fieldLabel: 'Title',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 275,
                        value: title
                    },{
                        xtype: 'textfield',
                        labelAlign: 'top',
                        fieldLabel: 'Link',
                        labelWidth: 75,
                        allowBlank: false,
                        width: 275,
                        value: link
                    },{
                        xtype: 'textarea',
                        fieldLabel: 'Description',
                        height: 115,
                        labelWidth: 75,
                        labelAlign: 'top',
                        width: 275,
                        allowBlank: false,
                        value: desc,
                    }],  

                }],
            }],

            buttons: [{
                text: 'Save',
                formBind: true,
                handler: function() {

                    if(validURL(editsubjectlinkwin.getComponent(0).getComponent(0).getComponent(0).getComponent(2).getValue())){
                        editsubjectlinkwin.close()

                        Ext.Ajax.request({
                            url: url,
                            method: 'POST',
                            params: {

                                pk: link_id,
                                title: editsubjectlinkwin.getComponent(0).getComponent(0).getComponent(0).getComponent(1).getValue(),
                                link: editsubjectlinkwin.getComponent(0).getComponent(0).getComponent(0).getComponent(2).getValue(),
                                description: editsubjectlinkwin.getComponent(0).getComponent(0).getComponent(0).getComponent(3).getValue()
                            },

                            success: function(response) {
                                var response = JSON.parse(response.responseText)

                                if (!response.success) {
                                    Ext.Msg.alert('Failed', response.msg)
                                } else if(response.success){
                                    store.reload()
                                    Ext.Msg.alert('Success', response.msg)
                                }
                                
                            },
                            failure: function() {
                                Ext.Msg.alert('Failed', 'Failed to Save')
                            }
                            
                        })

                    } else{
                        Ext.Msg.alert('Failed', "Please provide a valid link")
                    }
                    

                }
            },{
                text: 'Cancel',
                handler: function () {
                    editsubjectlinkwin.close()
                }
            }],
        }],
    });

    editsubjectlinkwin.show();

}

function deleteOlevelSubject(pk, subject_name, store, class_c) {
   
   Ext.Msg.confirm('Delete ' + name, 'Are you sure you want to delete ' + subject_name, function(button) {

    if(button == 'yes') {
      Ext.Ajax.request({
        url: '/olevel/deletesubject',
        method: 'POST',
        params: {
            pk: pk,
            class_c: class_c
        },

        success: function(response) {
            
            store.reload() 
            var response = JSON.parse(response.responseText)
            Ext.Msg.alert('Success', response)
        },
        failure: function() {
            Ext.Msg.alert('Failed', 'Failed')
        }

     });  

    }

   });
   

}


function deleteOlevelSubjectLink(pk, link_title, store, class_c) {
   
   Ext.Msg.confirm('Delete ' + name, 'Are you sure you want to delete ' + link_title, function(button) {

    if(button == 'yes') {
      Ext.Ajax.request({
        url: '/olevel/deletesubjectlink',
        method: 'POST',
        params: {
            pk: pk,
            class_c: class_c
        },

        success: function(response) {
            
            store.reload() 
            var response = JSON.parse(response.responseText)
            Ext.Msg.alert('Success', response)
        },
        failure: function() {
            Ext.Msg.alert('Failed', 'Failed')
        }

     });  

    }

   });
   

}


function deleteAlevelSubject(pk, subject_name, store, class_c) {
   Ext.Msg.confirm('Delete ' + name, 'Are you sure you want to delete ' + subject_name, function(button) {

    if(button == 'yes') {
      Ext.Ajax.request({
        url: '/alevel/deletesubject',
        method: 'POST',
        params: {
            pk: pk,
            class_c: class_c
        },

        success: function(response) {
            
            store.reload() 
            var response = JSON.parse(response.responseText)
            Ext.Msg.alert('Success', response)
        },
        failure: function() {
            Ext.Msg.alert('Failed', 'Failed')
        }

     });  

    }

   });
   

}


function deleteAlevelSubjectLink(pk, link_title, store, class_c) {
   Ext.Msg.confirm('Delete ' + name, 'Are you sure you want to delete ' + link_title, function(button) {

    if(button == 'yes') {
      Ext.Ajax.request({
        url: '/alevel/deletesubjectlink',
        method: 'POST',
        params: {
            pk: pk,
            class_c: class_c
        },

        success: function(response) {
            
            store.reload() 
            var response = JSON.parse(response.responseText)
            Ext.Msg.alert('Success', response)
        },
        failure: function() {
            Ext.Msg.alert('Failed', 'Failed')
        }

     });  

    }

   });
   

}