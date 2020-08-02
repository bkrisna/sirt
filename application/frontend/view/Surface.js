Ext.define('SIRT.view.Surface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.Surface',
    page_title: 'Sistem Informasi RT Terpadu',
	
    initComponent: function() {
        Ext.apply(this, {
            id: 'surface',
            layout: 'border',
            border: false,
            bodyPadding: 3,
           
            items: [{
                id: 'title',
                xtype: 'box',
                region: 'north',
                height: 40,
                html: this.page_title
            }/*,{
				xtype: 'movie-surface',
				region: 'center'
			}*/],
			
			dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                items: [{
                    xtype: 'tbtext',
                    text: 'Logged in as ' + GlobalVars.userdata.user
                },'->', {
                    xtype: 'button',
                    text: 'Logout',
                    iconCls: 'fam door',
                    action: 'logout'
                }]
			}]
        });

        this.callParent(arguments);
    }
});