
var functions = {
	main: function () {
		this.attachListeners();
		this.loadArticles();	
		this.renderDatePicker();
	},
	loadArticles: function () {
		var articles = JSON.parse(localStorage.getItem('articles')) || JSON.parse('[]');
		for (var i = 0; i < articles.length; i++) {
			this.renderArticle(articles[i]);
		}
	},
	attachListeners: function () {
		document.getElementById('submit_article').addEventListener('click', $.proxy(this.submitArticle, this));
	},
	getArticles: function () {
		var articles = JSON.parse(data);
	},
	submitArticle: function () {
		var currentArticle = {
			articleTitle: $('#article_title').val(),
			articleAuthor: $('#article_author').val(),
			articleData: $('#article_data').val(),
			articleComment: $('#article_comment').val()
		};
		var articles = JSON.parse(localStorage.getItem('articles')) || JSON.parse('[]');
		articles.push(currentArticle);
		localStorage.setItem('articles', JSON.stringify(articles));
		this.renderArticle(currentArticle);		
	},
	renderArticle: function (currentArticle) {
		var html = '';
		html += '<div class="card">';
		html += '<h2>' + currentArticle.articleTitle + '</h2>';
		html += '<h5>' + currentArticle.articleAuthor + ', ' + currentArticle.articleData +  '</h5>';
		html += '<p>' + currentArticle.articleComment + '</p>'
		html += '</div>';
		$('#article_container').prepend(html);
	},
	renderDatePicker: function () {
		$('#article_data').datepicker({
			dateFormat: 'yy-mm-dd'
		});
	}
}
functions.main()
