// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  List,
  ListItem,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  coverBg: require("../assets/cover-background.png"),
  alwaysThinking: require("../assets/always-thinking.jpg"),
  individuality: require("../assets/individuality.jpg"),
  femaleArtist: require("../assets/female-artist.jpg")
};

const REACT_BLUE = "#00d8ff";

preloader(images);

const theme = createTheme(
  {
    primary: "black",
    secondary: "white",
    tertiary: "black",
    quartenary: REACT_BLUE
  },
  {
    primary: {
      name: "Overpass",
      googleFont: true,
      styles: ["300", "400", "700"]
    },
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        {/* Intro */}
        <Slide
          transition={["slide"]}
          bgColor="primary"
          bgImage={images.coverBg}
          bgDarken={0.5}
        >
          <Heading size={1} fit bold lineHeight={1} textColor="secondary">
            From Onboarding to Apprenticeships
          </Heading>
          <Text bold margin="10px 0 0" textColor="secondary" size={2}>
            What Can Tech Learn From Tattooing
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit bold textColor="secondary">
            Hey, I'm @kurtiskemple.
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} bold textColor="secondary">
            I ❤️ building amazing user experiences.
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={3} bold textColor="secondary">
            But I actually ❤️ building amazing teams even more!
          </Heading>
        </Slide>
        <Slide
          align="flex-end center"
          transition={["slide"]}
          bgColor="primary"
          bgImage={images.alwaysThinking}
          bgDarken={0.5}
        >
          <Heading
            size={2}
            bold
            textColor="secondary"
            textAlign="right"
            style={{
              width: "800px",
              marginRight: 0,
              transform: "translateX(350px)"
            }}
          >
            Because you can't build amazing experiences without an amazing team.
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} bold textColor="secondary">
            Turns out, building an amazing team is really hard.
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <BlockQuote>
            <Quote textColor="quartenary">
              Current practices for recruiting, training, and retaining in tech
              are a 🗑🔥
            </Quote>
            <Cite>Me</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} textColor="secondary">
            💩 That's Broken In Our Industry
          </Heading>
          <List>
            <Appear>
              <ListItem bold textColor="quartenary">
                Sexism/Racism in the Workplace
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Hiring Overexperienced Developers</ListItem>
            </Appear>
            <Appear>
              <ListItem>Egocentric Interviewing Processes</ListItem>
            </Appear>
            <Appear>
              <ListItem>Lack of Mentorship</ListItem>
            </Appear>
          </List>
        </Slide>
        {/* Section 1 */}
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} bold textColor="quartenary">
            Sexism/Racism in the Workplace
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={3} bold textColor="quartenary">
            When it happens, it generally isn't blanant acts of sexism/rasicm...
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} bold textColor="quartenary">
            Those of us in a position to implement change must be willing to
            fight for underrepresented groups
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={4} bold textColor="quartenary">
            So what can we learn from the Tattooing industry here?
          </Heading>
        </Slide>
        <Slide
          transition={["slide"]}
          bgColor="primary"
          bgImage={images.individuality}
          bgDarken={0.8}
        >
          <Heading size={1} caps bold textColor="quartenary">
            Embrace Individuality!
          </Heading>
          <Text
            textColor="quartenary"
            style={{ fontSize: 24, transform: "translateY(200px)" }}
          >
            Photo by Alex Hockett on Unsplash
          </Text>
        </Slide>
        <Slide
          transition={["slide"]}
          bgColor="primary"
          bgImage={images.femaleArtist}
          bgDarken={0.6}
        >
          <Heading size={1} caps bold textColor="quartenary">
            Focus on skill over experience
          </Heading>
          <Text
            textColor="quartenary"
            style={{ fontSize: 24, transform: "translateY(200px)" }}
          >
            Tattoo Artist - @jen_beirola
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={3} caps bold textColor="quartenary">
            How can we put this into action?
          </Heading>
          <List padding="20" style={{ marginBottom: "100px" }}>
            <Appear>
              <ListItem>Getting diverstiy policies in place</ListItem>
            </Appear>
            <Appear>
              <ListItem>Ensuring you are hiring for individuality*</ListItem>
            </Appear>
            <Appear>
              <ListItem>Ensuring you are hiring based on skills**</ListItem>
            </Appear>
            <Appear>
              <ListItem>Creating an environment of safety***</ListItem>
            </Appear>
          </List>
          <Appear>
            <div style={{ marginTop: "200px" }}>
              <Text
                style={{ fontSize: 24, marginBottom: "15px" }}
                textColor="quartenary"
              >
                * Ask yourself: "What is the culture add they are bringing to
                the team?"
              </Text>
              <Text
                style={{ fontSize: 24, marginBottom: "15px" }}
                textColor="quartenary"
              >
                ** You will be hard pressed to find women/POC with lots of
                experience or in lead/management roles
              </Text>
              <Text
                style={{ fontSize: 24, marginBottom: "15px" }}
                textColor="quartenary"
              >
                <a
                  style={{ color: REACT_BLUE }}
                  href="http://larahogan.me/blog/being-a-manager-in-terrible-times/#creating-a-supportive-and-safe-environment"
                >
                  ***
                  http://larahogan.me/blog/being-a-manager-in-terrible-times/
                </a>
              </Text>
            </div>
          </Appear>
        </Slide>

        {/* Section 2 */}
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} bold textColor="secondary">
            Hiring Overexperienced Developers
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
