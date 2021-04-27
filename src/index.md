---
layout: home
meetups:
  - name: Israel.rb
    logo: israelrb-logo
    homepage: https://www.facebook.com/groups/272757750683415
  - name: Rzeszów Ruby User Group
    logo: rrugpl-logo
    homepage: https://twitter.com/rrugpl
  - name: vienna.rb
    logo: viennarb-logo
    homepage: https://www.meetup.com/vienna-rb/
---

<div class="content" markdown=1>

# What is EMEA on Rails?

The Ruby community tends to focus on the Americas and Japan, but there are so many Rubyists in Europe, the Middle East, and Africa too! Let's get together (virtually for now) and experience some of the excitement of RailsConf, without jetlag or timezone issues!

Our first event will be a meetup-of-meetups featuring EMEA speakers from this past RailsConf. Keep scrolling to find out [which meetups are participating](#participating-meetups) and who our speakers are.

You can also:

* [Register your meetup](https://forms.gle/s44Z78KySXYurX27A)
* [Follow us on Twitter](https://twitter.com/emeaonrails) for updates

## The Technical Details

We'll meet on the evening of June 9, EMEA time, exact times and online platform are still TBD.

</div>

----
{: .my-6}

# Participating Meetups
{: .mb-5 .title .has-text-centered #participating-meetups}

<div class="columns is-mobile is-multiline is-justify-content-center">
{% for meetup in page.meetups %}
  <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
    <a href="{{meetup.homepage}}">
      <figure class="image is-2by1">
        <img src="https://res.cloudinary.com/caplan/image/upload/w_400,h_200,c_lpad,f_auto,q_auto/v1/emea-on-rails-2021/{{meetup.logo}}.jpg" alt="{{meetup.name}}" />
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
