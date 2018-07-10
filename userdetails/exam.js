try {
    var user = JSON.parse(localStorage.user);
    var comment = JSON.parse(localStorage.comments);
    var post = JSON.parse(localStorage.posts);
}
catch (e) {
    var user = [];
    var comment = [];
    var post = [];
}
console.log(user);
console.log(comment);
console.log(post);

var userdetails = [];
var commentdetails = [];
var list1 = {
    name: "",
    title: "",
    details: ""
};

var list2 = {
    name: "",
    email: "",
    body: ""
};
var len=20;
var debounce=false;
function scroll1(){
    if(!debounce){
        debounce=true;
        setTimeout(function(){
             var temp_length=$(document).height();
    if(window.pageYOffset>temp_length-2000){
        if(len>=post.length){
            len=post.length
        }else{
         len+=20;
     }
         jQuery('#user_name').html("");
         viewdet();
    }
            debounce=false;
        },1000);
    }
}

function viewdet() {
this.len=20;
    jQuery('#user_name').html("");
    for (let i = 0; i < user.length; i++) {
        for (let j = 0; j < len; j++) {
            if (user[i].id == post[j].userId) {
                list1 = {
                    name: user[i].name,
                    postid: post[j].id,
                    title: post[j].title,
                    details: post[j].body
                };
                userdetails.push(list1);
            }
        }
    }

    console.log(userdetails);
    for (let i = 0; i < userdetails.length; i++) {
        jQuery('#user_name').append('<div id="post' + i + '"><p>' + 'username: ' + userdetails[i].name + '<br/>' + 'title: ' + userdetails[i].title + '<br/>' + 'body: ' + userdetails[i].details + "<br/><button id='" + 'view_comments' + i + "'>view comments</button>" + "<br/><button id='" + 'delete_p' + i + "'>delete post</button>" + '</p><div id="' + 'body' + i + '"></div>');
        jQuery(document).on('click', '#view_comments' + i, function () {
            for (let j = 0; j < comment.length; j++) {
                if (userdetails[i].postid == comment[j].postId) {
                    list2 = {
                        id: comment[j].id,
                        name: comment[j].name,
                        email: comment[j].email,
                        body: comment[j].body
                    };
                    commentdetails.push(list2);
                }
            }
            
            var data1 = '';
            for (let k = 0; k < commentdetails.length; k++) {
                data1 += '<p id="comnts' + k + '"><br/>Name:' + commentdetails[k].name + ' <br />email:' + commentdetails[k].email + ' <br />body:' + commentdetails[k].body + '' + "<br/><button id='" + 'delete_c' + commentdetails[k].id + "'>delete comments</button>" + '</p>';
                jQuery(document).on('click', '#delete_c' + commentdetails[k].id, function () {
                    jQuery('#comnts' + k).remove();
                    var temp_id = jQuery(this).attr('id').replace('delete_c','');
                    for (let z = 0; z < comment.length; z++) {
                        if (temp_id == comment[z].id) {
                            comment.splice(z, 1);
                        }
                        
                    }
                    localStorage.comments = JSON.stringify(comment);
                   
                });
            }
            jQuery('#body' + i).html(data1);
            commentdetails = [];
        });
        jQuery(document).on('click', '#delete_p' + i, function () {
            jQuery('#post' + i).remove();
            post.splice(i, 1);
            localStorage.posts = JSON.stringify(post);
        });
    }
}
