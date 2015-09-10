---
layout: default
---

<div>
  <ul class="listing">
  {% for post in site.posts limit: 1 %}
  <article class="content">
    <section class="title">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    </section>
    <section class="meta">
    <span class="time">
      <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
    </span>
    {% if post.tags %}
    <span class="tags">
      {% for tag in post.tags %}
      <a href="/tags.html#{{ tag }}" title="{{ tag }}">#{{ tag }}</a>
      {% endfor %}
    </span>
    {% endif %}
    <!-- BEGIN this would not work on any other domain -->
    <span
      class           = 'like-wrapper'
      like-shortname  = '{{ site.disqus }}'
      like-identifier = '{{ post.guid }}'
      like-name       = '{{ post.title }}'
      like-link       = '{{ site.atom-baseurl }}{{ page.url }}'
      like-btn        = '&#xf087;'
    ></span>
    <script type="text/javascript">
      var l = document.createElement('script'); l.type = 'text/javascript'; l.async = true;
      l.src = 'http://www.like-btn.com/javascript/widget.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(l);
    </script>
    <!-- END this would not work on any other domain -->
    <!-- 多说评论框 start -->
    <div class="ds-thread" data-thread-key="{{ post.guid }}" data-title="{{ post.title }}" data-url="{{ site.atom-baseurl }}{{ page.url }}"></div>
    <!-- 多说评论框 end -->
    <!-- 多说公共JS代码 start (一个网页只需插入一次) -->
    <script type="text/javascript">
    var duoshuoQuery = {short_name:"{{ site.duoshuo }}"};
        (function() {
                var ds = document.createElement('script');
                ds.type = 'text/javascript';ds.async = true;
                ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
                ds.charset = 'UTF-8';
                (document.getElementsByTagName('head')[0] 
                    || document.getElementsByTagName('body')[0]).appendChild(ds);
        })();
    </script>
    <!-- 多说公共JS代码 end -->
    </section>
    <section class="post">
    {{ post.content }}
    </section>
    </article>
  {% endfor %}
  </ul>
  <div class="divider"></div>
  <ul class="listing main-listing">
    <li class="listing-seperator">Happend earlier this year</i>
  {% capture year %}{{ site.time | date:"%Y"}}{% endcapture %}
  {% for post in site.posts offset:1 %}
    {% capture y %}{{ post.date | date:"%Y"}}{% endcapture %}
    {% if year != y %}
    {% break %}
    {% endif %}
    <li class="listing-item">
      <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
      <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
    </li>
  {% endfor %}
    <li class="listing-seperator"><a href="/archive.html">Long long ago</a></li>
  </ul>
</div>
