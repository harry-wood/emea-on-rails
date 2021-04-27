---
layout: home
meetups:
  - name: Israel.rb
    logo: https://pbs.twimg.com/profile_banners/1281546021575811073/1594379719/1500x500
    homepage: https://www.facebook.com/groups/272757750683415
---

# What is EMEA on Rails?

The Ruby community tends to focus on the Americas and Japan, but there are so many Rubyists in Europe, the Middle East, and Africa too! Let's get together (virtually for now) and experience some of the excitement of RailsConf, without jetlag or timezone issues!

Our first event will be a meetup-of-meetups featuring EMEA speakers from this past RailsConf. Keep scrolling to find out [which meetups are participating](#participating-meetups) and who our speakers are.

You can also:

* [Register your meetup](https://forms.gle/s44Z78KySXYurX27A)
* [Follow us on Twitter](https://twitter.com/emeaonrails) for updates

## The Technical Details

We'll meet on the evening of June 9, EMEA time, exact times and online platform are still TBD.

----
{: .my-6}

# Participating Meetups
{: .mb-5 .title .has-text-centered #participating-meetups}

<div class="columns is-multiline is-justify-content-center">
{% for meetup in page.meetups %}
  <div class="column is-full-mobile is-half-tablet is-one-quarter-desktop">
    <a href="{{meetup.homepage}}">
      <figure class="image is-1by1">
        <img src="https://res.cloudinary.com/caplan/image/fetch/w_500,h_500,c_lpad,f_auto,q_auto/{{meetup.logo}}" alt="{{meetup.name}}">
      </figure>
    </a>
  </div>
{% endfor %}
</div>
  <p class="mt-5 has-text-centered">
    <a href="https://forms.gle/s44Z78KySXYurX27A">
      <button class="button is-primary">
        <span class="icon"><i class="fa fa-file-text"></i></span>
        <span>Add my meetup!</span>
      </button>
    </a>
  </p>

----
{: .my-6}

# Latest Articles
{: .mb-5 .title .has-text-centered}

{% assign posts = site.posts | slice: 0, 6 %}
{% render "bulmatown/collection", collection: posts, metadata: site.metadata %}

{% if site.posts.size > 6 %}
  <a href="/posts/" class="button is-primary is-outlined is-small"><span>Previous Articles</span> <span class="icon"><i class="fa fa-arrow-right"></i></span></a>
  {: .mt-6 .has-text-centered}
{% endif %}
