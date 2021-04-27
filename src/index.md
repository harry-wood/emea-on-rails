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
    twitter: amcaplan
    title: "The Trail to Scale Without Fail: Rails?"
    abstract: |-
      Let's be blunt: Most web apps aren’t so computation-heavy and won't hit scaling issues.
      What if yours is the exception? Can Rails handle it?
      Cue Exhibit A: Cloudinary, which serves billions of image and video requests daily, including on-the-fly edits, QUICKLY, running on Rails since Day 1. Case closed?
      Not so fast. Beyond the app itself, we needed creative solutions to ensure that, as traffic rises and falls at the speed of the internet, we handle the load gracefully, and no customer overwhelms the system.
      The real question isn't whether Rails is up to the challenge, but rather: Are you?
    bio: |-
      Ariel works as a software engineer at Cloudinary, trying to bend the curve to achieve both code quality and great performance. In his experience, seeking multiple perspectives is the greatest tool available.
  - name: Ben Greenberg
    twitter: rabbigreenberg
    title: Self-Care on Rails
    abstract: |-
      This past year has been one of the most challenging years in recent memory. The pandemic has taken a toll, including on children.
      Adults used their professional skills to help make the year a little better for the kids in our lives: Therapists counseled, entertainers delighted, teachers educated... and Rails developers developed!
      In this talk, I'll share the apps I built on Rails that helped my kids and me cope, celebrate and persevere through the year.
      In 2020, tech was pivotal in keeping us going, and for my kids, Rails made the year a little more manageable.
    bio: |-
      Ben is a second career developer who previously spent a decade in the fields of adult education, community organizing, and non-profit management. He works as the Ruby developer advocate for Vonage by day and experiments with open source projects at night. He writes regularly on the intersection of community development and tech. Originally from Southern California and a long time resident of New York City, Ben now resides near Tel Aviv.
  - name: Maciek Rząsa
    twitter: mjrzasa
    title: "API Optimization Tale: Monitor, Fix and Deploy (on Friday)"
    abstract: |-
      I saw a green build on a Friday afternoon. I knew I need to push it to production before the weekend. My gut told me it was a trap. I had already stayed late to revert a broken deploy. I knew the risk.
      In the middle of a service extraction project, we decided to migrate from REST to GraphQL and optimize API usage. My deploy was a part of this radical change.
      Why was I deploying so late? How did we measure the migration effects? And why was I testing on production? I'll tell you a tale of small steps, monitoring, and old tricks in a new setting. Hope, despair, and broken production included.
    bio: |-
      Software engineer specialising in Ruby with ~10 years of experience in various domains. Interested in distributed systems, self-organising teams and writing software that matters. At Toptal where he works, he is involved in a Billing Extraction project in which a complex domain of billing is isolated as a separate service.
      Knowledge sharing advocate. Co-organiser of Rzeszów Ruby User Group. Speaker at technical conferences and meetups. Instructor at Rzeszów University of Technology.
  - name: Ramón Huidobro
    twitter: hola_soy_milk
    title: "New dev, old codebase: A series of mentorship stories"
    abstract: |-
      Mentorship in software development carries a lot of responsibility, but plays an integral part in making tech communities as well as individuals thrive.
      In this talk, we'll go over some of my mentorship experiences, adopting techniques and learning to teach, so we can teach to learn. Anyone can be a great mentor!
    bio: |-
      Ramón is a software engineering and developer relations contractor based in Vienna, Austria. He's spent the last ten years being directly involved with small businesses and startups getting their apps off the ground or back in shape!
      His main motivation is community. He's not only actively worked software builders both new and experienced, but also dedicated a time to organising conferences, workshops and other events aimed at helping empower folks in their tech journey.
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
{% assign alphabetized-speakers = page.speakers | sort: "name" %}
{% for speaker in alphabetized-speakers %}
  <div class="column is-half-mobile is-one-third-tablet">
    <div class="card is-full-mobile is-half-tablet is-one-third-desktop">
      <div class="card-image">
        <figure class="image is-1by1">
          <img src="https://res.cloudinary.com/caplan/image/twitter_name/w_400,h_400,c_fill,f_auto,q_auto/{{speaker.twitter}}.jpg" alt="Profile of {{speaker.name}}" />
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
                <div class="message-body">
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

<script type="text/javascript">
  document.body.addEventListener("keyup", function(e) {
    if (e.keyCode !== 27) return;
    var modal = document.getElementsByClassName("modal is-active")[0];
    if (modal) modal.classList.remove('is-active');
  });
</script>
