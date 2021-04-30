---
layout: home
---

<div class="content" markdown=1>

# What is EMEA on Rails?
{: .title}
The conference experience, minus the jetlag! Join us online on June 9, 2021
{: .subtitle .has-text-weight-normal}

There are so many Rubyists in Europe, the Middle East, and Africa, but we haven't managed to gather much in the past year, and we could definitely learn a lot from each other. Let's get together (virtually for now) and experience some of the excitement of an international conference (remember those?), without jetlag or timezone challenges!

Our first event will be a meetup-of-meetups featuring EMEA speakers from this past RailsConf. Keep scrolling to find out [which meetups are participating](#participating-meetups) and [who our speakers are](#speakers).

You can also:

* [Register your meetup](https://forms.gle/s44Z78KySXYurX27A)
* [Follow us on Twitter](https://twitter.com/emeaonrails) for updates

## The Technical Details

We'll meet on the evening of June 9, EMEA time, exact times and online platform are still TBD.

</div>

----
{: .my-6}

# Participating Meetups (so far)
{: .mb-5 .title .has-text-centered #participating-meetups}

<div class="columns is-mobile is-multiline is-justify-content-center">
{% assign alphabetized-meetups = site.data.meetups | sort: "name" %}
{% for meetup in alphabetized-meetups %}
  <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
    <a href="{{meetup.homepage}}">
      <figure class="image is-2by1">
        <img src="https://res.cloudinary.com/caplan/image/upload/w_400,h_200,c_lpad,f_auto,q_auto/v1/emea-on-rails-2021/meetups/{{meetup.logo}}.jpg" alt="{{meetup.name}}" />
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
</div>

----
{: .my-6}

# Speakers
{: .mb-5 .title .has-text-centered #speakers}

<div class="columns is-multiline is-justify-content-center">
{% assign alphabetized-speakers = site.data.speakers | sort: "name" %}
{% for speaker in alphabetized-speakers %}
  <div class="column is-one-third-tablet">
    <div class="card">
      <div class="card-image">
        <figure class="image is-1by1">
          <img src="https://res.cloudinary.com/caplan/image/{% if speaker.avatar %}upload{% else %}twitter_name{% endif %}/w_400,h_400,c_fill,f_auto,q_auto/{% if speaker.avatar %}emea-on-rails-2021/speakers/{{speaker.avatar}}{% else %}{{speaker.twitter}}{% endif %}.jpg" alt="Profile of {{speaker.name}}" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <a href="https://twitter.com/{{ speaker.twitter }}" target="_blank">
              <h4 class="title is-4">{{ speaker.name }}</h4>
            </a>
            <p class="subtitle is-6 is-italic">{{ speaker.title }}</p>
          </div>
        </div>

        <div class="content">
          {{ speaker.abstract | truncatewords: 40 }}
        </div>
      </div>
      <div class="card-footer">
        {% capture modal-id %}speaker-modal-{{ forloop.index }}{% endcapture %}
        <a href="#{{ modal-id }}" class="card-footer-item" onclick="javascript:document.getElementById('{{ modal-id }}').classList.add('is-active');">Read More</a>
        <div class="modal" id="{{ modal-id }}">
          <div class="modal-background" onclick="javascript:document.getElementById('{{ modal-id }}').classList.remove('is-active');"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <h3 class="modal-card-title">{{ speaker.name }}</h3>
              <button class="delete" aria-label="close" onclick="javascript:document.getElementById('{{ modal-id }}').classList.remove('is-active');"></button>
            </header>
            <section class="modal-card-body">
              <div class="content">
                <h2>{{ speaker.title }}</h2>
                {% assign paragraphs = speaker.abstract | newline_to_br | split: '<br />' %}
                {% for paragraph in paragraphs %}<p>{{ paragraph }}</p>{% endfor %}
              </div>
              <article class="message">
                <div class="message-header">
                  <p>Bio</p>
                </div>
                <div class="message-body content">
                  {% assign paragraphs = speaker.bio | newline_to_br | split: '<br />' %}
                  {% for paragraph in paragraphs %}<p>{{ paragraph }}</p>{% endfor %}
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
{% endfor %}
</div>

----
{: .my-6}

# Thanks to our Supporters!
{: .mb-5 .title .has-text-centered #supporters}

<div class="columns is-mobile is-multiline is-justify-content-center">
{% assign alphabetized-supporters = site.data.supporters | sort: "name" %}
{% for supporter in alphabetized-supporters %}
  <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
    <a href="{{supporter.homepage}}">
      <figure class="image is-2by1">
        <img src="https://res.cloudinary.com/caplan/image/upload/w_400,h_200,c_lpad,f_auto,q_auto/v1/emea-on-rails-2021/supporters/{{supporter.logo}}-logo.jpg" alt="{{supporter.name}}" />
      </figure>
    </a>
  </div>
{% endfor %}
</div>


<script type="text/javascript">
  document.body.addEventListener("keyup", function(e) {
    if (e.keyCode !== 27) return;
    var modal = document.getElementsByClassName("modal is-active")[0];
    if (modal) modal.classList.remove('is-active');
  });
</script>
