import { Box, Container, Grid, Typography } from "@mui/material";
import faqBanner from "../../../assets/Faqs-banner.jpg";
import CustomizedAccordions from "../../Accordion/CustomizedAccordions";

const FAQ = () => {
  const Allfaqs = [
    {
      question: "Why choose our medical for your family?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Why we are different from others?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Trusted & experience senior care & love",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How to get appointment for emergency cases?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  return (
    <Box py={4}>
      <Container maxWidth="xl">
        <Typography
          color="#2AA7FF"
          fontWeight={600}
          textAlign="center"
          fontFamily="Poppins"
        >
          Get Your Answer
        </Typography>
        <Typography
          color="#1B3C74"
          variant="h2"
          textAlign="center"
          mb={2}
          fontFamily="Poppins"
          fontWeight={600}
        >
          Frequently Asked Questions
        </Typography>
        <Grid container alignItems="center" spacing={5}>
          <Grid item xs={12} md={6}>
            <Box src={faqBanner} component="img" width={1} height="auto" />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box maxWidth={450}>
              <CustomizedAccordions data={Allfaqs} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default FAQ;
