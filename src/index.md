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
speakers:
  - name: Ariel Caplan
    gravatar: 7b5a451ee25044b9c869e3e98b79425d
    title: "The Trail to Scale Without Fail: Rails?"
    abstract: |-
      Let's be blunt: Most web apps aren’t so computation-heavy and won't hit scaling issues.
      What if yours is the exception? Can Rails handle it?
      Cue Exhibit A: Cloudinary, which serves billions of image and video requests daily, including on-the-fly edits, QUICKLY, running on Rails since Day 1. Case closed?
      Not so fast. Beyond the app itself, we needed creative solutions to ensure that, as traffic rises and falls at the speed of the internet, we handle the load gracefully, and no customer overwhelms the system.
      The real question isn't whether Rails is up to the challenge, but rather: Are you?
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

# Speakers
{: .mb-5 .title .has-text-centered #speakers}

<div class="columns is-multiline is-justify-content-center">
{% for speaker in page.speakers %}
  <div class="column is-half-mobile is-one-third-tablet">
    <div class="card is-full-mobile is-half-tablet is-one-third-desktop">
      <div class="card-image">
        <figure class="image is-1by1">
          <img src="https://res.cloudinary.com/caplan/image/gravatar/w_400,h_400,c_fill,f_auto,q_auto/{{speaker.gravatar}}.jpg" alt="Profile of {{speaker.name}}" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ speaker.name }}</p>
            <p class="subtitle is-6 is-italic">{{ speaker.title }}</p>
          </div>
        </div>

        <div class="content">
          {{ speaker.abstract | truncatewords: 20 }}
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
            </section>
          </div>
        </div>
      </div>
    </div>
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
