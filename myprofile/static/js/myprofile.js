function myprofile() {
	var myprofile =Ext.create('Ext.form.Panel', {
		title: 'My Profile',
		iconCls: 'profile-icon',
        frame: true,
        id: 'myprofile-tab',
        layout: 'hbox',
        margins: '-1 -1 -1 -1',
        items: [{
            xtype: 'fieldset',
            title: 'General Information',
            flex: 45 / 100,
            layout: 'vbox',
            height: '100%',
            items: [{
                fieldLabel: 'User Name',
                xtype: 'textfield',
                labelWidth: 80,
                name: 'uuname', 
                width: 300, 
                // value: 'Muganwa',
                allowBlank: true,
                readOnly: true
            },{
                fieldLabel: 'First Name',
                xtype: 'textfield',
                labelWidth: 80,
                name: 'ufname',
                width: 300,
                allowBlank: true,
                readOnly: true,
                hidden: true
            },{
                fieldLabel: 'Last Name',
                xtype: 'textfield',
                labelWidth: 80,
                name: 'ulname',
                width: 300,
                allowBlank: true,
                readOnly: true,
                hidden: true
            },{
                fieldLabel: 'Email',
                xtype: 'textfield',
                labelWidth: 80,
                name: 'uemail',
                width: 300,
                allowBlank: true,
                hidden: true
            }],
        },{xtype: 'splitter', width: 20,},{
            xtype: 'fieldset',
            title: 'Contacts',
            layout: 'vbox',
            flex: 45 / 100,
            height: '100%',
            hidden: true,
            items: [{
                fieldLabel: 'Home-Phone',
                xtype: 'textfield',
                labelWidth: 100,
                name: 'uhome',
                width: 300,
                allowBlank: true,
            },{
                fieldLabel: 'Business-Phone',
                xtype: 'textfield',
                labelWidth: 100,
                name: 'ubusiness',
                width: 300,
                allowBlank: true,
            },{
                fieldLabel: 'Mobile-Phone',
                xtype: 'textfield',
                labelWidth: 100,
                name: 'umobile',
                width: 300,
                allowBlank: true,
            },{
                fieldLabel: 'Home-Address',
                xtype: 'textfield',
                labelWidth: 100,
                name: 'uhomeaddress',
                width: 300,
                allowBlank: true,
            }],
        }],

        buttons: [{
            text: 'Change Password',
            hidden: true,
            id: 'changepass',
            handler: function() {
                changepassword(changepass)
            }
        },{
            text: 'Save Changes',
            hidden: true,
            handler: function() {
                Ext.Ajax.request({
                    url: '/admin/userprofilechanges',
                    method: 'POST',
                    params: {
                        username: myprofile.getComponent(0).getComponent(0).getValue(),
                        firstname: myprofile.getComponent(0).getComponent(1).getValue(),
                        lastname: myprofile.getComponent(0).getComponent(2).getValue(),
                        email: myprofile.getComponent(0).getComponent(3).getValue(),
                        homephone: myprofile.getComponent(2).getComponent(0).getValue(),
                        mobilephone: myprofile.getComponent(2).getComponent(2).getValue(),
                        businessphone: myprofile.getComponent(2).getComponent(1).getValue(),
                        homeaddress: myprofile.getComponent(2).getComponent(3).getValue(),

                            
                    },
                    success: function(response) {
                        var response = JSON.parse(response.responseText)
                        Ext.Msg.alert('Success', response)
                    },
                    failure: function() {
                           
                    }
                });
            }
        }]
	})


    Ext.Ajax.request({
        url: '/profile',
        method: 'POST',
        async: false,
        success: function(response) {
            if (!JSON.parse(response.responseText).superuser) {

                myprofile.getComponent(0).getComponent(0).setValue(JSON.parse(response.responseText).username)
                /*myprofile.getComponent(0).getComponent(1).setValue(JSON.parse(response.responseText).firstname)
                myprofile.getComponent(0).getComponent(2).setValue(JSON.parse(response.responseText).lastname)*/
                

            }
            
            
                        
        },
        failure: function() {
            window.location='/login'
        }
    });

	return myprofile
}

