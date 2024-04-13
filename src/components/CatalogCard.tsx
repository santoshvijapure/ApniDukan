import React from "react";
import { productType } from "../types/types";
import tw, { styled, css } from "twin.macro";

const hoverStyles = css`
  &:hover {
    border-color: black;
    ${tw`text-black`}
  }
`;
type Component = {
  product: productType;
};

const CatalogCardStyle = styled("div")`
    height: 20rem;
`;

const BoxSpaceBeteen = styled("div")`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export default function CatalogCard({ product }: Component) {
  const { image, price, title } = product || {};
  return (
    <CatalogCardStyle>
      <img
        srcSet={`${image}?w=162&auto=format&dpr=2 2x`}
        src={`${image}?w=162&auto=format`}
        alt={title}
        loading="lazy"
        style={{
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          display: "block",
          width: "100%",
        }}
      />
    </CatalogCardStyle>
  );
  //   return (
  //     <CatalogCardStyle sx={{ maxWidth: 345 }}>
  //       {/* <CardMedia component="img" height="140" image={image} /> */}
  //                   <img
  //               srcSet={`${image}?w=162&auto=format&dpr=2 2x`}
  //               src={`${image}?w=162&auto=format`}
  //               alt={title}
  //               loading="lazy"
  //               style={{
  //                 borderBottomLeftRadius: 4,
  //                 borderBottomRightRadius: 4,
  //                 display: 'block',
  //                 width: '100%',
  //               }}
  //             />

  //       {/* <CardContent>
  //         <Box>
  //           <Typography
  //             gutterBottom
  //             variant="h5"
  //             component="div"
  //             sx={{
  //               overflow: "hidden",
  //               textOverflow: "ellipsis",
  //               display: "-webkit-box",
  //               WebkitLineClamp: "2",
  //               WebkitBoxOrient: "vertical",
  //             }}
  //           >
  //             {title}
  //           </Typography>
  //           <Typography variant="body2" color="text.secondary" mb="auto">
  //             Price: ${price}
  //           </Typography>
  //         </Box>
  //       </CardContent>
  //       <CardActions>
  //         <Button variant="contained" href="#" size="small" fullWidth>
  //           View Details
  //         </Button>
  //       </CardActions> */}
  //     </CatalogCardStyle>
  //   );
}
