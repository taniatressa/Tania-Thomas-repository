$(document).ready(function() {

  var myWindow = $(window),
    myDocument = $(document),
    loading = $('#loading'),
    posts = $('#post');
  //each time the user scrolls
  myWindow.scroll(function() {
    if ($(document).height() - myWindow.height() == myWindow.scrollTop()) {
      loading.show();
      /*
      	ajax call
        $.ajax(function(){
        url : 'get.php',
        dataType : 'html',
        success : function(html){
        posts.append(html);
        loading.hide();
        },
        
        })
      */
      
     $('#posts').append(generatePost());
      loading.hide();
    }
  });
});

//generate posts

function generatePost() {
  var paragraphs = [
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae suscipit arcu. Praesent pretium orci neque, non egestas massa suscipit non. In urna ligula, pretium ac magna in, consectetur venenatis dui. Etiam id commodo neque, vel semper nunc. Vivamus porttitor condimentum pulvinar. Quisque et consequat mi. Suspendisse luctus, quam in dapibus venenatis, velit erat malesuada lacus, dapibus tincidunt neque ex vitae leo. Suspendisse fermentum sit amet urna eu dignissim. Curabitur vel nibh quis justo volutpat porttitor et tempus sem.</p>',
    '<p>In a luctus purus, in tempus mi. Integer vulputate tincidunt arcu quis aliquet. Maecenas sollicitudin nec nisi sit amet dictum. Curabitur sagittis nulla id sem vulputate, eget blandit nibh ullamcorper. Nam feugiat elementum pharetra. Vestibulum a purus eget mi mattis tincidunt a sed felis. Sed pretium dignissim elementum. Cras est arcu, posuere et justo in, vehicula rutrum elit. Phasellus dictum risus libero, non cursus neque faucibus a. Nunc dignissim at purus vitae condimentum. Curabitur in libero mi.</p>',
    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at tristique nibh, sed congue ligula. Curabitur eu porttitor tellus. Aliquam eu mollis tortor. Donec tortor sapien, molestie eu turpis vel, ultrices pulvinar orci. Aenean sagittis sem sit amet viverra maximus. Morbi id enim ipsum. Curabitur luctus placerat erat ut volutpat. In quis eros mattis, rutrum neque ut, malesuada neque.</p>',
    '<p>Integer erat eros, vestibulum at tortor vitae, sollicitudin finibus est. Aliquam ornare, elit nec gravida sagittis, sapien nibh elementum felis, eu eleifend eros lectus non mi. Nulla vel nisl scelerisque, consectetur nibh vel, malesuada lacus. Nam lobortis accumsan nisl consequat dictum. Praesent eget lobortis lorem. Ut sed ultrices enim. Nam nec ultricies felis.</p>',
    '<p>Donec hendrerit dolor id auctor ullamcorper. Curabitur ut mauris dolor. Quisque vitae cursus eros, ac rutrum sem. Aenean in turpis turpis. Fusce sit amet libero id massa dictum fermentum at eget arcu. Vestibulum eget blandit urna. In eu tristique augue. Phasellus augue risus, porttitor vel arcu nec, tincidunt laoreet tellus. Nam ornare leo dapibus ipsum dictum interdum.</p>',
    '<p>Nulla molestie porttitor justo vitae pharetra. Proin non convallis lacus, eget malesuada metus. Duis aliquam eu massa molestie rhoncus. Vestibulum a malesuada nulla. Morbi at libero tempus, hendrerit quam vitae, auctor eros. Vivamus tincidunt enim a est tincidunt, sed fringilla erat placerat. Nulla cursus, eros sed posuere sagittis, dui est lobortis tellus, id dapibus dui sem eget enim. Vestibulum eleifend lacus velit, ut suscipit nisi bibendum at. Nulla facilisi. Aenean luctus tellus eget nisi vestibulum, eget interdum lectus efficitur.</p>',
    '<p>Quisque facilisis aliquet dui, ut blandit odio vulputate et. Ut ac nisl turpis. Pellentesque scelerisque massa sit amet ipsum commodo cursus. Aenean eget ante et neque gravida tempor. Phasellus aliquam, purus quis malesuada vestibulum, sem mi cursus justo, a convallis purus dolor non lorem. Nunc dapibus vehicula nisi, eget egestas tellus lacinia vel. Nullam nisl ipsum, vehicula dignissim feugiat eu, semper nec arcu. Duis porttitor ut ex eget commodo. Curabitur accumsan diam ac euismod tincidunt. Cras dui urna, volutpat quis vehicula vitae, rhoncus a lacus. Curabitur ut purus aliquet, venenatis felis in, laoreet massa. Nullam lobortis sollicitudin aliquam. Quisque nec nisl eu sem vulputate venenatis. Proin sagittis erat sit amet sem vestibulum vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>'
  ];
  //now shuffle the paragraph
  for (var i = paragraphs.length - 1; !!i; --i) {
    var j = Math.floor(Math.random() * i);
    var p = paragraphs[i];
    paragraphs[i] = paragraphs[j];
    paragraphs[j] = p;
  }
  //now generate the posts
  var myPosts = '<li>';
  myPosts += '<article>';
  myPosts += '<header><h1>Some Random Posts gonna load</h1></header>'
  myPosts += paragraphs.join('');
  myPosts += '</article>';
  myPosts += '</li>';
  return myPosts;

}
