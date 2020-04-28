
          var DATA = {
        name: "Hi, I'm Swarnabha.",
        subtext: "Computer Science undergraduate (junior year) based in Kolkata, India",
        jobStatus: "Looking for an internship (preferably, research-oriented) in Deep Learning (specifically, Computer Vision).",
        githubURL: 'https://github.com/swarn4399',
        linkedinURL: 'https://www.linkedin.com/in/swarnabharoy',
        resumeURL: 'https://github.com/swarn4399/Profile/blob/master/Resume_SR.pdf'
      }
      var App = React.createClass({
        render: function() {
          return(
            <div className="app">
              <Left
                name={this.props.profileData.name}
                subtext={this.props.profileData.subtext}
                jobStatus={this.props.profileData.jobStatus}
                githubURL={this.props.profileData.githubURL}
                linkedinURL={this.props.profileData.linkedinURL}
              />
              <Right
                intro={this.props.profileData.intro}
                resumeURL={this.props.profileData.resumeURL}
              />
            </div>
          );
        }
      });
      var Left = React.createClass({
        render: function() {
          return(
            <div className="left">
              <div className="bg-img"></div>
              <div className="left-inner">
                <div className="info">
                  <h2 className="name">{this.props.name}</h2>
                  <div className="subtext">{this.props.subtext}</div>
                  <div className="jobStatus">{this.props.jobStatus}</div>
                  <div className="social-links">
                  <a href={this.props.githubURL} target="_blank"><i className="fa fa-github"></i></a>
                  <a href={this.props.linkedinURL}  target="_blank"><i className="fa fa-linkedin"></i></a>
                </div>
               </div>
              </div>
            </div>
          );
        }
      });
      var Right = React.createClass({
        render: function() {
          return(
            <div className="right">
              <div className="right-inner">
                <div className="introduction">
                  <h4>Summary</h4>
                  <div className="content">
                    <p className="intro-p">I&#39;m currently in my third year (out of four) of B.Tech studying Computer Science & Engineering at the Institute of Engineering & Management(IEM), Kolkata.</p>
                    <p className="intro-p">I am fascinated with Deep Learning. I have completed several independent as well as guided projects so far in the domain of Computer Vision, which is my favorite application area of Deep Learning.</p>
                    <span className="intro-p job-pls"><a href="mailto:swarnabha4399@gmail.com?Subject=Internship%20opportunity" target="_blank">I&#39;m looking for a research-oriented summer 2020 internship role. Send me an email by clicking here.</a></span>
                  </div>
                </div>
                <div className="education">
                  <h4>Education</h4>
                  <div className="content">
                    <div className="edu-item">
                        <div className="duration">August 2017 &mdash; Present</div>
                        <div className="university"><a href="https://iem.edu.in/" target="_blank">IEM, Kolkata</a></div>
                        <div className="college"><a href="https://iemcse.wordpress.com/" target="_blank">Department of Computer Science & Engineering</a></div>
                        <div className="major"><strong>Major:</strong> Computer Science</div>
                        <div className="minor"><strong>CGPA:</strong> 8.6/10(till 5th semester) </div>
                        <div className="coursework"><strong>Relevant coursework:</strong> Data Structures and Algorithms, Design and Analysis of Algorithms, Discrete Mathematics,Theory of Computation, Digital Logic, Computer Architecture and Organization, Microprocessor Based Systems, Computer Graphics</div>
                        <div className="grad-date">Expected Graduation: July 2021</div>
                    </div>
                    <div className="edu-item">
                        <div className="duration">2015 &mdash; 2017</div>
                        <div className="university"><a href="http://www.southpoint.edu.in/" target="_blank">South Point High School</a></div>
                        <div className="college">Kolkata</div>
                        <div className="major"><strong>SCORE:</strong> 90.6%</div>
                        <div className="coursework">Completed Senior Secondary Education under the CBSE covering basic subjects, including Physics, Chemistry, Mathematics, Computer Science and English.</div>
                    </div>
                    <div className="edu-item">
                        <div className="duration">2013 &mdash; 2015</div>
                        <div className="university"><a href="http://www.southpoint.edu.in/" target="_blank">South Point High School</a></div>
                        <div className="college">Kolkata</div>
                        <div className="major"><strong>CGPA:</strong> 10/10</div>
                        <div className="coursework">Completed Secondary level education. Secured perfect score in nation-wide examination affiliated to Central Board of Secondary Education. </div>
                    </div>
                  </div>
                </div>
                <div className="experience">
                  <h4>Experience</h4>
                  <div className="content">
                    <div className="exp-item">
                      <div className="job">
                        <a className="company" href="https://www.iitr.ac.in/" target="_blank">Indian Institute of Technology, Roorkee </a>
                        <div className="duration">June 2019 &mdash; present</div>
                      </div>
                      <div className="title">Undergraduate Research Intern</div>                                                        <ul className="description">
                        <li>Worked under the guidance of <a href="https://www.iitr.ac.in/departments/CSE/pages/People+Faculty+Partha_Pratim_Roy.html">Dr Partha Pratim Roy</a>  in the domain of Sign Language Recognition.</li>            <li>Critiqued  some of the most cited research papers in the domain, and performed an initial literature review to get acquainted with the techniques involved. This was followed by a summary of various methods used so far, along with challenges faced by each method and possible scopes of improvement.</li>
                        <li>Implemented the latest paper in the field, achieving the same results as claimed by the experiment in the paper, thereby completing a successful verification. The paper in question is “A position and rotation invariant framework for sign language recognition (SLR) using Kinect".</li> 
                        <li>The framework is capable of recognizing occluded sign gestures using Hidden Markov Model(HMM) and has been tested on a dataset of 2700 gestures.</li>
                      </ul>
                    </div>
                    <div className="exp-item">
                      <div className="job">
                        <a className="company" href="https://www.helpageindia.org/" target="_blank">HelpAge India </a>
                        <div className="duration">Dec 2018 &mdash; Jan 2019</div>
                      </div>
                      <div className="title">Intern</div>
                      <ul className="description">
                        <li>Worked with the caregivers and support team to analyse the situation of the elderly population in Kolkata.</li>
                        <li>During the 3 weeks of internship, I went on site visits with the Mobile Healthcare Unit for better understanding of the problems faced by the elderly people especially in the suburbs.</li>
                        <li>Documented the work-flow and prepared a presentation of my analysis along with detailed case studies.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="projects">
                  <h4>Projects</h4>
                  <div className="content">

                     <div className="project-item">
                      <a className="project-title" href="" target="_blank">Build an OpenStreetMap Route Planner</a>

                      <div className="duration">July 2019</div>
                      <ul className="project-desc">
                        <li>Implemented A-Star Search in C++ using concepts of Object-Oriented Programming(OOPs) to find the shortest path from one point to another in a map generated from OpenStreetMap data.</li>
                        <li>Passed automated testing under the Google Testing framework. The tests were provided by Udacity to ensure correct implementation of code. Also, passed a code review from an experienced reviewer at Udacity, with comments about the impressive way in which the entire project was coded.</li>
                      </ul>
                     </div>

                     <div className="project-item">
                      <a className="project-title" href="" target="_blank">Deploying a Sentiment Analysis Model</a>
                      <div className="duration">June 2019</div>
                      <ul className="project-desc">
                        <li>Constructed a recurrent neural network(RNN) to determine the sentiment of a movie review using the IMDB data set.</li>
                        <li>The objective of the project was to learn the basic usage of Amazon Sagemaker and also to learn how to deploy web apps integrated with Deep Learning models.</li>
                      </ul>
                     </div>

                     <div className="project-item">
                      <a className="project-title" href="" target="_blank">Generate Faces</a>
                      <div className="duration">May 2019</div>
                      <ul className="project-desc">
                        <li>Implemented a Generative Adversarial Networks(GAN) based approach to generate realistic new faces of people, using the PyTorch framework.</li>
                        <li>The goal of the project was to have a fairly basic hands-on introduction to the concepts of GANs. The course, of which this project is a part of, was taught by Ian Goodfellow, the inventor of GANs, himself.</li>
                      </ul>
                     </div>

                     <div className="project-item">
                      <a className="project-title" href="" target="_blank">Generate TV Scripts</a>
                      <div className="duration">May 2019</div>
                      <ul className="project-desc">
                        <li>Generated my own Seinfeld TV scripts using RNNs, using the Seinfeld dataset of scripts from 9 seasons. The Neural Network I built generates realistic new, "fake" TV scripts using the property of RNNs to predict terms of a sequence of text given a part of the text as training input.</li>
                      </ul>
                     </div>

                     <div className="project-item">
                      <a className="project-title" href="" target="_blank">Dog-Breed Classifier</a>
                      <div className="duration">May 2019</div>
                      <ul className="project-desc">
                        <li>Learnt how to build a pipeline that can be used within a web or mobile app to process real-world, user-supplied images. Given an image of a dog, the algorithm will identify an estimate of the canine’s breed. If supplied an image of a human, the input will be identified as human using a Haar Cascades classifier-based approach.</li>
                     </ul>
                     </div>

                     <div className="project-item">
                      <a className="project-title" href="" target="_blank">Predicting Bike-Sharing Data</a>
                      <div className="duration">May 2019</div>
                      <ul className="project-desc">
                        <li>Built a Neural Network from scratch using the NumPy toolbox only. The goal of this project was to learn the absolute basics of what goes on behind some of the common operations achieved using common Deep Learning frameworks like PyTorch, to gain a deeper understanding.</li>
                      </ul>
                     </div>

                     <div className="project-item">
                      <a className="project-title" href="" target="_blank">Face Detection and Recognition</a>
                      <div className="duration">April 2019</div>
                      <ul className="project-desc">
                        <li>As an extension of my project called Facial Keypoint Detection, I implemented a facial recognition system from scratch and trained it to detect my classmates.</li>
                        <li>This project was presented in front of a panel of 5 professors of the Computer Science department in my college, and I also submitted a brief dissertation to the panel detailing the implementation.</li>
                      </ul>
                     </div>

                    <div className="project-item">
                      <a className="project-title" href="https://github.com/iamshnoo/Udacity-CVND-P1---Facial-Keypoint-Detection" target="_blank">Facial Keypoint Detection</a>
                      <div className="duration">Feb 2019</div>
                      <ul className="project-desc">
                        <li>Implementation of Facial Landmark Detection by plotting key-points detected on faces.</li>
                        <li>The most effective model trained was AlexNet, which gave accuracy of 89.59% with 760 test images after training for 70 epochs on 3462 images from the YouTube Faces data-set.</li>
                        <li>PyTorch was utilized for implementing all tasks and finally the trained model checkpoint file was saved, to allow use in future projects.</li>
                      </ul>
                    </div>
                    <div className="project-item">
                      <a className="project-title" href="https://github.com/iamshnoo/UDACITY-CVND-P2---Image-Captioning" target="_blank">Image Captioning</a>
                      <div className="duration">March 2019</div>
                      <ul className="project-desc">
                        <li>Generated captions from images based on the COCO data-set by Microsoft.</li>
                        <li>Implemented transfer learning with a Resnet-50 architecture to generate feature vectors for images and also implemented an RNN decoder for these feature vectors using LSTM cells.</li>
                        <li>Trained for 3 hours on a data-set of about 4 million images converging at a loss of nearly 2%.</li>
                      </ul>
                    </div>
                    <div className="project-item">
                      <a className="project-title" href="https://github.com/iamshnoo/UDACITY-CVND-P3---SLAM" target="_blank">Simultaneous Localization and Mapping</a>
                      <div className="duration">April 2019</div>
                      <ul className="project-desc">
                        <li>Implemented a simplified version of graph SLAM in a 2D plane.</li>
                        <li>Landmark locations were generated at random. Robot motion was tracked from start to end. Using the logic of Kalman filters, SLAM was implemented.</li>
                        <li>Used unit tests to verify the correctness of the implementation.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="skills">
                  <h4>Skills</h4>
                  <div className="content">
                    <div className="skill-category">
                      <strong>Programming Languages: &nbsp;</strong>
                      <span>C/C++, Python, Java, LaTeX</span>
                    </div>
                    <div className="skill-category">
                      <strong>Tools &amp; Technologies: &nbsp;</strong>
                      <span>PyTorch, OpenCV, NumPy, AWS, PCL, Git</span>
                    </div>
                    <div className="skill-category">
                      <strong>Area(s) of expertise: &nbsp;</strong>
                      <span>Deep Learning, Computer Vision, Image Processing</span>
                    </div>
                    <div className="skill-category">
                      <strong>Relevant coursework: </strong>
                      <span>Data Structures and Algorithms, Design and Analysis of Algorithms, Discrete Mathematics, Theory of Computation, Digital Logic, Computer Architecture and Organization</span>
                    </div>
                  </div>
                </div>
                <a className="resume" href={this.props.resumeURL} target="_blank"><div className="resume-link">Download a PDF copy of my Résumé</div></a>
              </div>
            </div>
          );
        }
      });
      ReactDOM.render(
        <App profileData={DATA}/>,
        document.getElementById('content')
      );
    
