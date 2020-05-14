function addUser(usersstore, adduser) {
	var win = Ext.create('Ext.window.Window', {
		title: 'New User',
		iconCls: 'add-icon',
		animateTarget: 'adduser',
		modal: true,
		// width: 700,
		
		items: [
		  {
		  	xtype: 'form',
		  	title: 'User Information',
		  	method: 'POST',
		  	frame: true,
            id: 'addUserForm',
            height: '100',
            layout: 'hbox',
            margins: '-1 -1 -1 -1',
            items: [{
                xtype: 'container',
                layout: 'vbox',
                items: [{
                    fieldLabel: 'User Name',
                    name: 'uname',
                    xtype: 'textfield',
                    allowBlank: false,
                    labelWidth: 75,
                    width: 250,
                },{
                    fieldLabel: 'First Name',
                    name: 'fname',
                    xtype: 'textfield',
                    allowBlank: false,
                    labelWidth: 75,
                    width: 250,
                },{
                    fieldLabel: 'Last Name',
                    name: 'lname',
                    xtype: 'textfield',
                    allowBlank: false,
                    labelWidth: 75,
                    width: 250,
                }],
            },{xtype: 'splitter', width: 20,},{
                xtype: 'container',
                layout: 'vbox', 
                items: [{
                    fieldLabel: 'Email',
                    name: 'email',
                    xtype: 'textfield',
                    allowBlank: 'false',
                    labelWidth: 75,
                    width: 250,
                },{
                    fieldLabel: 'Password',
                    name: 'passwd',
                    xtype: 'textfield',
                    inputType: 'password',
                    labelWidth: 75,
                    allowBlank: false,
                    width: 250,
                },{
                    fieldLabel: 'Confirm',
                    xtype: 'textfield',
                    inputType: 'password',
                    name: 'confirmpass',
                    allowBlank: false,
                    labelWidth: 75,
                    width: 250,
                }],
            }],

		  	buttons: [{
		  		formBind: true,
                id: 'saveUser',
		  		text: 'Save',
                // disabled: true,
                handler: function() {
                	var adduser_form = Ext.getCmp('addUserForm')
                    var user_data = adduser_form.getValues()
                    var firstpass = user_data.passwd
                    var confirmpass = user_data.confirmpass

                    if (firstpass != confirmpass){
                        Ext.Msg.alert('Check Your Password again', 'Password should be the same');
                    }else{
                    	Ext.Ajax.request({
                            url: '/admin/addUserfunc',
                            method: 'POST',
                            params: {
                                username : user_data.uname,
                                firstname: user_data.fname,
                                lastname: user_data.lname,
                                email: user_data.email,
                                password: user_data.passwd,
                            },

                            success: function(response) {
                            	win.close()
                            	usersstore.reload()
                                var response = JSON.parse(response.responseText)
                                Ext.Msg.alert('Success', response)
                            },
                            failure: function() {
                                Ext.Msg.alert('Failed', 'Failed to create a new User Account')
                            }
                        });
                    }
                        


                }

		  	},{
		  		text: 'Cancel',
		  		handler: function() {
		  			win.close()
		  		}
		  	}],
		}],

	});
	win.show()
}


function editUser(primaryKey, username, firstname, lastname, email, user_password, edituser, usersstore) {
    var win = Ext.create('Ext.window.Window', {
        title: 'Users Information',
        iconCls: 'edit-icon',
        animateTarget: edituser,
        modal: true,
        // width: '50%',
        
        // height: '80%',
        items: [
          {
            xtype: 'form',
            title: 'User Information',
            method: 'POST',
            id: 'editUserForm',
            frame: true,
            defaults: { anchor: '100%' },
            layout: 'hbox',

            items: [{
                xtype: 'container',
                layout: 'vbox',
                items: [{
                    fieldLabel: 'User Name',
                    name: 'eduname',
                    value: username,
                    xtype: 'textfield',
                    allowBlank: false,
                    labelWidth: 75,
                    width: 250,
                },{
                    fieldLabel: 'First Name',
                    name: 'edfname',
                    xtype: 'textfield',
                    value: firstname,
                    allowBlank: false,
                    labelWidth: 75,
                    width: 250,
                },{
                    fieldLabel: 'Last Name',
                    name: 'edlname',
                    xtype: 'textfield',
                    value: lastname,
                    allowBlank: false,
                    labelWidth: 75,
                    width: 250,
                }],
            },{xtype: 'splitter', width: 20,},{
                xtype: 'container',
                layout: 'vbox', 
                items: [{
                    fieldLabel: 'Email',
                    name: 'edemail',
                    xtype: 'textfield',
                    value: email,
                    allowBlank: 'false',
                    labelWidth: 75,
                    width: 250,
                },{
                    fieldLabel: 'Password',
                    name: 'edpasswd',
                    xtype: 'textfield',
                    inputType: 'password',
                    value: user_password,
                    labelWidth: 75,
                    allowBlank: false,
                    width: 250,
                },{
                    fieldLabel: 'Confirm',
                    xtype: 'textfield',
                    inputType: 'password',
                    value: user_password,
                    name: 'edpasswdconf',
                    allowBlank: false,
                    labelWidth: 75,
                    width: 250,
                }],
            }],
            
            buttons: [
                {
                    formBind: true,
                    text: 'Save',
                    handler: function() {
	                    win.close()

                        var userdata = Ext.getCmp('editUserForm')
                        var eddata = userdata.getValues()
                        var key = primaryKey
                        var edfirstpass = eddata.edpasswd
                        var edconfirmpass = eddata.edpasswdconf

                        if (edfirstpass != edconfirmpass ){
                            Ext.Msg.alert('Check Your Password again', 'Password should be the same');
                        }else{
                        	Ext.Ajax.request({
	                            url: '/admin/editUserfunc',
	                            method: 'POST',
	                            params: {
	                                primarykey: key,
	                                username : eddata.eduname,
	                                firstname: eddata.edfname, // for mapping to the database and the front end
	                                lastname: eddata.edlname,
	                                email: eddata.edemail,
	                                password: eddata.edpasswd,
	                            },

	                            success: function() {
	                                usersstore.reload() // usersstore has a global scope
	                                Ext.Msg.alert('Success', 'Successfully edited an Account')
	                            },
	                            failure: function() {
	                                Ext.Msg.alert('Failed', 'Failed to edit a User Account')
	                            }
	                        });
                        }

                        
                    }

                },{
                    text: 'Cancel',
                    handler: function() {
                        win.close()
                    }
                }
            ],
          }

        ],

    });
    win.show()
}

function removeUser(key, name, usersstore) {
   
   Ext.Msg.confirm('Delete ' + name, 'Are you sure you want to delete ' + name, function(button) {

    if(button == 'yes') {
      Ext.Ajax.request({
        url: '/admin/removeUserfunc',
        method: 'POST',
        params: {
            primarykey: key,
            
        },

        success: function(response) {
            
            usersstore.reload() // usersstore has a global scope
            var response = JSON.parse(response.responseText)
            Ext.Msg.alert('Success', response)
        },
        failure: function() {
            Ext.Msg.alert('Failed', 'Failed to remove an Account')
        }

     });  

    }

   });
   

}

function usersinfo() {

	var usersstore = Ext.create('Ext.data.Store', {
		storeId: 'users',
        id: 'storeforusers',
		autoLoad: true,
		fields: [
		   {name: 'id', type: 'int', mapping: 'fields.id'},
           {name: 'username', type: 'string', mapping: 'fields.username'},
		   {name: 'firstname', type: 'string', mapping: 'fields.firstname'},
		   {name: 'lastname', type: 'string', mapping: 'fields.lastname'},
		   {name: 'email', type: 'string', mapping: 'fields.email'},
		   {name: 'created', type: 'string', mapping: 'fields.created'},
		   {name: 'lastlogin', type: 'string', mapping: 'fields.lastlogin'},
		   {name: 'active', type: 'string', mapping: 'fields.active'},
           {name: 'passwd', mapping: 'fields.password'},      

		],
		proxy: {
			type: 'ajax',
			url: '/admin/getusers',
			actionMethods: {create : 'POST', read   : 'POST', update : 'POST', destroy: 'POST'},
			reader: {
				type: 'json',
				root: 'response', // which should match at the back
			},
		}
	});



	var gridUsers = Ext.create('Ext.grid.Panel', {
		title: 'Users Information',
		closable: true,
		id: 'users-tab',
		iconCls: 'admin-icon',
		store: usersstore,
		columnLines: true,
		columns: [
		{xtype: 'rownumberer',text: 'No',},
		{text: 'User Name', dataIndex: 'username', flex: 30 / 100},
		{text: 'First Name', dataIndex: 'firstname', flex: 30 / 100},
		{text: 'Last Name', dataIndex: 'lastname', flex: 30 / 100},
		{text: 'Email', dataIndex: 'email', flex: 65 / 100, /*renderer: function(value){return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);}*/},
		{text: 'Created On', dataIndex: 'created', flex: 50 / 100},
		{text: 'Last Login', dataIndex: 'lastlogin', flex: 50 / 100},

		],

		dockedItems: [
        {
			xtype: 'toolbar',
			dock: 'top',
			items: [
				{
					xtype: 'button',
					text: 'New User',
					iconCls: 'add-icon',
					id: 'adduser',
					listeners: {
						click:function() {
							addUser(usersstore, adduser);
						}
					}
				},{
					xtype: 'tbseparator',
				},{
					xtype: 'button',
					text: 'Edit User',
                    disabled: true,
					id: 'edituser',
					iconCls: 'edit-icon',
					listeners: {
						click: function() {
							editUser(primaryKey, username, firstname, lastname, email, user_password, edituser, usersstore)
						}
					}
				},{
					xtype: 'tbseparator'
				},{
					xtype: 'button',
					text: 'Refresh',
					iconCls: 'refresh-icon',
					action: 'refresh',
                    listeners: {
                        'click': function() {
                            usersstore.reload();
                        }
                    }
				},{
					xtype: 'tbseparator',
				},/*{
					xtype: 'button',
					text: 'Remove User',
					id: 'removeuser',
                    disabled: true,
					iconCls: 'remove-icon',
                    listeners: {
                        'click': function() {
                            removeUser(primaryKey, username, usersstore)
                        }
                    }
				},*/{
                    xtype: 'tbseparator',
                },'->',{
                    xtype: 'textfield',
                    emptyText: 'Search.....',
                    labelWidth:50,
                    width: 250,
                    enableKeyEvents: true,
                    listeners: {
                        'keyup': function(f,e) {
                            gridUsers.store.getProxy().extraParams={pattern: f.getValue()};
                            gridUsers.store.loadPage(1);
                        }
                    }
                          
                }
			],
		},{
            dock: 'bottom',
            xtype: 'pagingtoolbar',
            pageSize: 5,
            /*plugins: Ext.create('Ext.ux.SlidingPager', {}),*/
            store : usersstore,
            displayInfo : true,
            displayMsg : "Displaying users {0} - {1} of {2}",
            emptyMsg : "Nothing to display",



        }],

        listeners: {
           itemclick: function(data, record, position) {

            Ext.getCmp('edituser').setDisabled(false)
            Ext.getCmp('removeuser').setDisabled(false)

            primaryKey = record.data.id
            username = record.data.username
            firstname = record.data.firstname
            lastname = record.data.lastname
            email = record.data.email
            user_password = record.data.passwd
            
             // The above variables all have a global scope means to be accessed anywhere in the program
            
           },
           itemdblclick: function(data, record, position) {

            /*var primaryKey = record.data.id
            var username = record.data.username
            var firstname = record.data.firstname
            var lastname = record.data.lastname
            var email = record.data.email*/
            
            editUser(primaryKey, username, firstname, lastname, email, user_password, edituser, usersstore);
           
           },
        }
	});

	return gridUsers
}