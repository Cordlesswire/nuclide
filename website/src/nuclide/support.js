/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('React');
var Site = require('Site');
var center = require('center');
var H2 = require('H2');

var support = React.createClass({
  render: function() {
    return (
      <Site section="support" title="Support">

        <section className="content wrap documentationContent nosidebar">
          <div className="inner-content">
            <h1>Need help?</h1>
            <div className="subHeader"></div>
            <p>
              <strong>Nuclide</strong> is worked on full-time by Facebook&#39;s
              product infrastructure user interface
              engineering teams. They&#39;re often around and available for
              questions.
            </p>

            <H2>Community translation</H2>
            <p>The following is a list of translated docs offered by community volunteers. Send a pull request to fill the list!</p>
            <ul>
              <li><a href="http://reactnative.cn">Chinese</a> (<a href="https://github.com/reactnativecn/nuclide-docs-cn">source</a>)</li>
            </ul>

            <H2>Stack Overflow</H2>
            <p>Many members of the community use Stack Overflow to ask questions. Read through the <a href="http://stackoverflow.com/questions/tagged/nuclide">existing questions</a> tagged with <strong>nuclide</strong> or <a href="http://stackoverflow.com/questions/ask">ask your own</a>!</p>

            <H2>Chat</H2>
            <p>Join us in <strong><a href="irc://chat.freenode.net/reactnative">#reactnative on Reactiflux</a></strong>.</p>

            <H2>Twitter</H2>
            <p><a href="https://twitter.com/search?q=%23reactnative"><strong>#reactnative</strong> hash tag on Twitter</a> is used to keep up with the latest Nuclide news.</p>

            <p><center><a className="twitter-timeline" data-dnt="true" data-chrome="nofooter noheader transparent" href="https://twitter.com/search?q=%23reactnative" data-widget-id="565960513457098753"></a></center></p>
          </div>
        </section>

      </Site>
    );
  }
});

module.exports = support;
