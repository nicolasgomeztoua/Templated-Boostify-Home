import React from "react";
import PropTypes from "prop-types";

import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";

import Plus from "@pagerland/icons/src/line/Plus";
import Minus from "@pagerland/icons/src/line/Minus";

import Box from "@pagerland/common/src/components/Box";
import Container from "@pagerland/common/src/components/Container";
import Typography from "@pagerland/common/src/components/Typography";
import Accordion from "@pagerland/common/src/components/Accordion";
import Card from "@pagerland/common/src/components/Card";
import Icon from "@pagerland/common/src/components/Icon";

import Img from "@pagerland/common/src/components/Img";

import data from "../../data";

const FAQ = ({
  name,
  title,
  image,
  text,
  options,
  WrapperProps,
  ContainerProps,
  InnerProps,
  LiquidProps,
  TitleProps,
  TextProps,
  AccordionProps,
  AccordionItemProps,
  AccordionItemIconProps,
  AccordionItemTitleProps,
  AccordionItemTextProps,
}) => (
  <Box {...WrapperProps}>
    <Container {...ContainerProps} name={name}>
      <Box {...InnerProps}>
        <Box {...LiquidProps}>
          <Reveal ssrReveal ssrFadeout effect="liquid" duration={600}>
            <Img alt={title} src={image} />
          </Reveal>
        </Box>
        <Fade bottom cascade duration={600}>
          <Typography {...TitleProps}>{title}</Typography>
          <Typography {...TextProps}>{text}</Typography>
        </Fade>
        <Accordion
          renderItem={({ option, onSelect, isSelected, key }) => (
            <Fade bottom duration={600} delay={key * 100}>
              <Card as="button" onClick={onSelect} {...AccordionItemProps}>
                <Box flexBox>
                  <Icon
                    icon={isSelected ? Minus : Plus}
                    {...AccordionItemIconProps}
                  />
                  <div>
                    <Typography {...AccordionItemTitleProps}>
                      {option.title}
                    </Typography>
                    <Fade duration={600} collapse when={isSelected}>
                      <Typography {...AccordionItemTextProps}>
                        {option.text}
                      </Typography>
                    </Fade>
                  </div>
                </Box>
              </Card>
            </Fade>
          )}
          options={options}
          {...AccordionProps}
        />
      </Box>
    </Container>
  </Box>
);

FAQ.propTypes = {
  /**
   * Name of container, can be used for anchors
   */
  name: PropTypes.string.isRequired,
  /**
   * Title text
   */
  image: PropTypes.node,

  title: PropTypes.node,
  /**
   * Main content text
   */
  text: PropTypes.node,
  /**
   * Options which will be used to generate accordion
   */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Option title
       */
      title: PropTypes.node,
      /**
       * Option text
       */
      text: PropTypes.node,
    })
  ),
  /**
   * Main wrapper props
   * @See @pagerland/common/src/components/Box
   */
  WrapperProps: PropTypes.object,
  /**
   * Container props
   * @See @pagerland/common/src/components/Container
   */
  ContainerProps: PropTypes.object,
  /**
   * Inner box props
   * @See @pagerland/common/src/components/Box
   */
  InnerProps: PropTypes.object,
  /**
   * Object with props for Liquid component.
   */
  LiquidProps: PropTypes.object,
  /**
   * Title text props
   * @See @pagerland/common/src/components/Typography
   */
  TitleProps: PropTypes.object,
  /**
   * Main content text props
   * @See @pagerland/common/src/components/Typography
   */
  TextProps: PropTypes.object,
  /**
   * Accordion component props
   * @See @pagerland/common/src/components/Accordion
   */
  AccordionProps: PropTypes.object,
  /**
   * Single item in accordion props
   * @See @pagerland/common/src/components/Card
   */
  AccordionItemProps: PropTypes.object,
  /**
   * Icon in accordion item props
   * @See @pagerland/common/src/components/Icon
   */
  AccordionItemIconProps: PropTypes.object,
  /**
   * Title text in accordion item props
   * @See @pagerland/common/src/components/Typography
   */
  AccordionItemTitleProps: PropTypes.object,
  /**
   * Main content text in accordion item props
   * @See @pagerland/common/src/components/Typography
   */
  AccordionItemTextProps: PropTypes.object,
};

FAQ.defaultProps = {
  WrapperProps: {
    overflow: "hidden",
    mt: -30,
    pt: 60,
    pb: 60,
    mb: -60,
  },
  ContainerProps: {
    py: {
      _: 30,
      lg: 60,
    },
  },
  InnerProps: {
    position: "relative",
    maxWidth: 770,
    mb: 50,
  },
  LiquidProps: {
    position: "absolute",
    top: 112,
    left: `calc(100% + 35px)`,
  },
  TitleProps: {
    as: "h2",
    variant: "h2",
    mb: {
      _: 3,
      lg: 4,
    },
  },
  TextProps: {
    variant: "body1",
    color: "gray.1",
  },
  AccordionProps: {
    mt: {
      _: 30,
      lg: 50,
    },
  },
  AccordionItemIconProps: {
    fontSize: 24,
    gradient: "quaternary",
    lineHeight: 1,
    mr: 3,
    mt: "2px",
    display: {
      _: "none",
      md: "block",
    },
  },
  AccordionItemProps: {
    p: 3,
    mb: 1,
  },
  AccordionItemTitleProps: {
    variant: "h4",
    color: "gray.0",
  },
  AccordionItemTextProps: {
    color: "gray.1",
    py: 3,
    pr: 3,
  },
  ...data.faq,
};

export default FAQ;
