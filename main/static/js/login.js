
Ext.onReady(function() {
	var checked;
	function createaccount(createacc) {
		var win = Ext.create('Ext.window.Window', {
			title: 'Create Account',
			iconCls: 'profile-icon',
			animateTarget: createacc,
			modal: true,
			closable: true,
			border: false,
			layout: 'anchor',
			// width: 700,
			
			items: [
			  {
			  	xtype: 'form',
			  	method: 'POST',
			  	frame: true,
	            id: 'createuseraccount',
	            height: '100',
	            width: 350,

	            // margins: '-1 -1 -1 -1',
			  	defaults: { 
	                anchor: '100%',
	                labelAlign: 'top',

	            },
	            items: [/*{
	            	hidden: true,
	                fieldLabel: 'User Name',
	                name: 'uname',
	                xtype: 'textfield',
	                allowBlank: false,
	                labelWidth: 95,
	                width: 300,
	            },*/{
	            	fieldLabel: 'Names',
                    name: 'names',
                    xtype: 'textfield',
                    allowBlank: false,
                    labelWidth: 95,
                    width: 250,
                },/*{
                	fieldLabel: 'Last Name',
                    name: 'lname',
                    xtype: 'textfield',
                    allowBlank: false,
                    labelWidth: 95,
                    width: 250,
                    hidden: true
                },*//*{
                	hidden: true,
                	fieldLabel: 'Email Address',
                    name: 'email',
                    xtype: 'textfield',
                    allowBlank: 'false',
                    labelWidth: 95,
                    vtype: 'email',
                    width: 250,
                },*/{
                	fieldLabel: 'Password',
                    name: 'passwd',
                    xtype: 'textfield',
                    inputType: 'password',
                    labelWidth: 95,
                    allowBlank: false,
                    width: 250,
                },{
                	fieldLabel: 'Repeat Password',
                    xtype: 'textfield',
                    inputType: 'password',
                    name: 'confirmpass',
                    allowBlank: false,
                    labelWidth: 95,
                    width: 250,
                }/*,{
                	xtype: 'checkbox',
                	boxLabel: 'I have read & accepted the Terms of Use',
                	name: 'terms',
                	allowBlank: false,
                	margin: '2 2 2 2',
                	listeners: {
                		'change': function(checkbox, newValue, oldValue, eOpts) {
                			checked = newValue
                		}
                	}
	            }*/],

			  	buttons: [{
			  			formBind: true,
	                    id: 'saveUser',
			  			text: 'Save',
	                    // disabled: true,
	                    handler: function() {
	                    	
	                        var adduser_form = Ext.getCmp('createuseraccount')
	                        var user_data = adduser_form.getValues()
	                        var firstpass = user_data.passwd
	                        var confirmpass = user_data.confirmpass
	                        if (firstpass != confirmpass){
	                            Ext.Msg.alert('Check Your Password again', 'Password should be the same');
	                        }/*else if((checked==false) || (checked==undefined)){
	                        	Ext.Msg.alert('Terms', 'Terms and conditions should apply')
	                        }*/else if((firstpass == confirmpass)){
	                        	win.close()
	                        	Ext.Ajax.request({
	                            url: '/createacc',
	                            method: 'POST',
	                            params: {
	                                //username : user_data.uname,
	                                names: user_data.names,
	                                //lastname: user_data.lname,
	                                //email: user_data.email,
	                                password: user_data.passwd,
	                            },

	                            success: function(response) {
	                                win.close()
	                                var response = JSON.parse(response.responseText)
                                    Ext.Msg.alert('Success', response)
	                            },
	                            failure: function() {
	                                Ext.Msg.alert('Failed', 'Failed to create an Account')
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

	(function(){
		
		var loginform = Ext.create('Ext.panel.Panel', {
			width: 405,
			// bodyStyle: 'background:transparent;',
			// bodyStyle: 'opacity:0.7;',
			items: [{
				// region: 'center',
				xtype: 'form',
				method: 'POST',
				id: 'form',
				margins:'-1 -1 -1 -1',
				layout: 'anchor',
				// bodyStyle: 'background:transparent;',
				// bodyStyle: 'opacity:0.5;',
				// frame:true,
                defaults: { anchor: '100%' },
				bodyPadding: 13,
				title: 'Login \t (For Support: +250788846759)',
				iconCls: 'login-icon',
				items: [{

					fieldLabel: 'Username',
					name: 'uname',
					xtype: 'textfield',
					labelAlign: 'top',
					allowBlank:false,

				},{
					fieldLabel: 'Password',
					name: 'passwd',
					xtype:'textfield',
					inputType:'password', 
					labelAlign: 'top',
					font: '1px monospace',
					allowBlank:false,
					listeners: {
						'specialkey': function(field, e){
							if((e.getKey() == e.ENTER) && (loginform.getComponent(0).getComponent(0).getValue().length > 0) && (loginform.getComponent(0).getComponent(1).getValue().length > 0) ){
								var mask = new Ext.LoadMask(Ext.getBody(), {msg:"Authenticating.... Please wait..."});
								mask.show();	
								var myForm = Ext.getCmp('form');
								var values = myForm.getValues();
								Ext.Ajax.request({
									url: '/logi',
									method: 'POST',
									params: {
										username: values.uname,  /* username and password are the values to be got by django*/
										password: values.passwd,
										platform: window.navigator.platform
									},

									success: function(response) {
										/*var myMask = new Ext.LoadMask(myPanel, {msg:"Please wait..."});
										myMask.show();*/

										var response = JSON.parse(response.responseText)
										mask.hide()
										if (response=='User Name and/or Password not correct'){
											Ext.Msg.alert('Login Failed', response)
										}else{
											window.location = response
										}
										// console.log(response.responseText)
									},
									failure: function() {
										mask.hide();
										Ext.Msg.alert('Login Failed', 'User Name and/or Password not correct');
										// window.location = '/login'
									}
								});
							}
						}
					}
				
				}],

				

				buttons: [{

					text: 'New Student',
					id: 'createacc',
					bodyStyle: 'opacity:0.5;',
					resizable: false,
					listeners: {
						'click': function() {
							createaccount(createacc)
						}
					},

				},{
					xtype: 'splitter', 
					width: 225,
					resizable: false,
				},{
					text: 'Login',
					bodyStyle: 'opacity:0.5;',
					formBind: true,
					handler: function(f,e) {
						var myForm = Ext.getCmp('form');
						var values = myForm.getValues();
						

						
						var platform = window.navigator.platform
						var sliced = platform.substring(0, 7)
						Ext.get(loginform.getEl()).mask("Authenticating... Please wait...",'loading');
						Ext.Ajax.request({
							url: '/logi',
							method: 'POST',
							params: {
								username: values.uname,  
								password: values.passwd,
								platform: window.navigator.platform
							},

							success: function(response) {
								/*var myMask = new Ext.LoadMask(myPanel, {msg:"Please wait..."});
								myMask.show();*/
								var response = JSON.parse(response.responseText)
								Ext.get(loginform.getEl()).unmask();
								if (response=='User Name and/or Password not correct'){
									Ext.Msg.alert('Login Failed', response)
								}else{
									window.location = response
								}
								// window.location = response
							},
							failure: function(response) {
								Ext.get(loginform.getEl()).unmask();
								var response = JSON.parse(response.responseText)
            					// Ext.Msg.alert('Login Failed', response)
								Ext.Msg.alert('Login Failed', 'User Name and/or Password not correct');
								// window.location = '/login'
							}
						});
										
					}
				}]
			}],


		});
		
		var viewP = Ext.create('Ext.container.Viewport', {
			// padding: '250%, 600%, 0% 400%',
			layout: {
				type: 'vbox',
				align: 'center',
				pack: 'center',
			},
			
			style: {
				// margin: 25,
		        background:'#ffffff',
		        backgroundImage: 'url(/static/images/elearning_background.png)',
		        backgroundSize: '100% 100%',
		        backgroundRepeat: 'no-repeat',
		        
		    },

			items: [loginform]
		})

		return loginform
	})();
});