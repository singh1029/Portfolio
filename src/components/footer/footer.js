import React, { Component } from 'react';

export class Footer extends Component {
    render() {
      let resumeData = this.props.resumeData;
        return (
            <footer>
            <div className="row">
              <div className="twelve columns">
                <ul className="social-links">
              <li><a href="#"><i className="fa fa-github-alt" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#"><i className="fa fa-instagram" /></a></li>
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
                </ul>
                <ul className="copyright">
                  <li>© Copyright 2020 {resumeData.name}</li>
                  <li>Design by {resumeData.name}</li>   
                </ul>
              </div>
              <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
            </div>
          </footer>
        );
    }
}
