import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  home: {
    width: '80%',
    margin: '2rem auto 0 auto'
  },
  sub: {
    marginBottom: '2rem'
  },
  em: {
    color: '#3F51B5',
    fontStyle: 'normal'
  },
  body: {
    fontSize: '1.1rem',
    marginBottom: '1rem'
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.home}>
        <Typography
          variant="display3"
          className={classes.title}
          color="primary"
        >
          MentHealth
        </Typography>
        <Typography
          variant="headline"
          color="textSecondary"
          className={classes.sub}
        >
          <em className={classes.em}>Ment</em>
          ors for <em className={classes.em}>Ment</em>
          al <em className={classes.em}>Health</em>
        </Typography>
        <Typography variant="body2" className={classes.body}>
          Welcome to MentHealth! MentHealth is a platform where you can share
          resources that have helped you during your mental health journey.
        </Typography>
        <Typography variant="body2" className={classes.body}>
          No pressure! We understand that it may be difficult to share, so
          please don't feel any pressure to. However, please take a look at the
          resources our users have shared. Whether it's a simple picture, poem,
          song, or video, it was shared to help you!
        </Typography>
        <Typography variant="body2" className={classes.body}>
          Thank you for visiting MentHealth. We know how hard it can be to keep
          track of your mental health. Hopefully, MentHealth can help even a
          tiny bit in your personal journey in improving your mental health.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
