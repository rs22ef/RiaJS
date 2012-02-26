var router_master = Backbone.Router.extend
({
	placeholder: '#basePlaceholder',
	cached_views: {},

	routes: {
    	'': 				'start',
		'start': 			'start',

		'createincome':		'create_income',
		'updateincome':		'update_income',
		'deleteincome':		'delete_income',

		'createoutcome':	'create_outcome',
		'updateoutcome':	'update_outcome',
		'deleteoutcome':	'delete_outcome'
  	},

	clearView: function() 
	{
		$(this.placeholder).empty();
	},

	initialize: function()
	{
		this.view_start = new view_start({el: $(this.placeholder)})
        this.cached_views.view_start = this.view_start;

		this.view_create_update = new view_create_update({el: $(this.placeholder)})
        this.cached_views.view_create_update = this.view_create_update;

		this.collection_budget_post = new collection_budget_post();
	},

	start: function()
	{
		this.clearView();
		this.cached_views.view_start.render();
	},

	create_income: function()
	{
		this.clearView();
		this.cached_views.view_create_update.render('Lägg till ny inkomst', 'Lägg till');
	},	

	update_income: function()
	{
		this.clearView();
		this.cached_views.view_create_update.render('Uppdatera äldre inkomst', 'Uppdatera');
	},

	delete_income: function()
	{
		this.clearView();
	},		

	create_outcome: function()
	{
		this.clearView();
		this.cached_views.view_create_update.render('Lägg till ny utgift', 'Lägg till');
	},	

	update_outcome: function()
	{
		this.clearView();
		this.cached_views.view_create_update.render('Uppdatera äldre utgift', 'Uppdatera');
	},

	delete_outcome: function()
	{
		this.clearView();
	}	
});