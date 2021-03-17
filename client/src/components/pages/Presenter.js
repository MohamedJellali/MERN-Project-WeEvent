import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

import brand from "../../photos/logo.png";

const Presenter = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          {/* <span style={{ fontSize: "3em" }}>Welcome To Your Community</span> */}
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "3em" }}>Welcome To Your Community</span>
          <img
                width="180px"
                height="50px"
                className="img-responsive"
                src={brand}
                alt="logo"
              />
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "3em" }}> Share Your Hobbies with Us</span>
          <img
                width="180px"
                height="50px"
                className="img-responsive"
                src={brand}
                alt="logo"
              />
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <div>
        <img
                width="380px"
                height="150px"
                className="img-responsive"
                src={brand}
                alt="logo"
              />
        </div>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "3em" }}>Discover new activities</span> <br/>
          <span style={{ fontSize: "3em" }}>Meet passionate people</span> <br/>
          <span style={{ fontSize: "3em" }}>Join a World Wide Community</span> <br/>
          <span style={{ fontSize: "3em" }}>Creat Events and invit people</span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Presenter;
