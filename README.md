Request-Github
==============

A simple extension of Request.JSONP to pull Github repo data.

How to use
----------

	window.addEvents({

	    domready: function() {

	        //Change to use your Github username
	        new Request.Github('svizion', {
	            show_forks: false,
	            count     : 10,
	            data: {
	                type: "public",
	                sort: "updated"
	            },
	            onFailure: function(err) {
	                $$('#gh_repos li.loading').addClass('error').set("html", "Github is busted! or maybe my scripting skillz need work...");
	            },

	            onSuccess: function(repos) {

	                if (repos.data) repos = repos.data;

	                var i = 0,
	                    fragment = '',
	                    // Change the id to your element.
	                    t = document.id('gh_repos');

					// Count the repos and slice the array/object
	                if (this.options.count){
	                    repos.splice(this.options.count);
	                }
	                for (i = 0; i < repos.length; i++) {
	                	// Weed out the forks.
	                    if ( ! this.options.show_forks && repos[i].fork) {
	                        continue;
	                    }

	                    // Build up the html
	                    fragment += '<li><a href="' + repos[i].html_url + '">' + repos[i].name + '</a><p>' + repos[i].description + '</p></li>';
	                }
	                // Drop it in the DOM
	                t.set('html', fragment);

	            }
	        }).send();
	    }


	});


Please see [Github's API Docs](http://developer.github.com/v3/repos/) for other options.
