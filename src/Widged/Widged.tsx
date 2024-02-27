
import { Root, CardContainer, ImageContainer, ContentOverlay ,H5} from './WidgetStyles';
import { Box } from "@mui/material";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";

const images = [
  { path: Image1, content: "Check your IMEI Number." },
  { path: Image2, content: "Control your AC with A Smartphone." },
  { path: Image3, content: "Keep your Smartphone Cool." },
];

const Widget = () => {
  return (
    <Box>
      <H5>Know your gadget</H5>
      <Root>
        {images.map((image, index) => (
          <CardContainer key={index}>
            <ImageContainer>
              <img
                src={image.path}
                alt={`Image ${index + 1}`}
                style={{ width: "100%", marginBottom: "10px" }}
              />
              <ContentOverlay>
                <p>{image.content}</p>
              </ContentOverlay>
            </ImageContainer>
          </CardContainer>
        ))}
      </Root>
    </Box>
  );
};

export default Widget;
