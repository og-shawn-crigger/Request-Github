/*
---
description: Request.JSONP class extension to pull Github repo's for the user.

license: MIT-style

authors:
- Shawn Crigger <@svizion>

requires:
- more/1.3 : JSONP
- core/1.3 : *

provides: Request.Github

...
*/
Request.Github = new Class({

    Extends: Request.JSONP,

    options: {
        url: "https://api.github.com/users/{user}/repos",
        skip_forks: true,
        callbackKey: "callback",
        count: 10,
        data: {
            type: "public",
            sort: "updated"
        }
    },

    initialize: function(user, options) {
        this.parent(options);
        this.options.url = this.options.url.substitute({
            user: user
        });
    },

    success: function(data, script) {

        this.parent(data, script);
    }
});//end