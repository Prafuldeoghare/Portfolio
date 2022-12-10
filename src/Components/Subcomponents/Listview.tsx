import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import styled from "styled-components";
import Calender from "../../Assets/Logo/Calender";
import Location from "../../Assets/Logo/Location";
import Office from "../../Assets/Logo/Office";

interface ListviewProps {
  jobTitle: string;
  status: string;
  officeName: string;
  location: string;
  date: string;
  description?: any;
  height: string;
  width: number;
}

interface ListWrapperProps {
  height: string;
}

interface DisplayProps {
  width: number;
}

const ListWrapper = styled.div<ListWrapperProps>`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  border-bottom: 2px solid #ebeaed;
  transition: height 0.5s;
  height: 80px;
  overflow-y: hidden;
  margin: 50px 0px;

  @media (min-width: 1441px) {
    width: 704px;
  }

  @media (max-width: 1024px) {
    width: 750px;
  }

  @media (max-width: 768px) {
    width: 604px;
  }

  @media (max-width: 425px) {
    width: 350px;
    height: 118px;
  }

  @media (max-width: 419px) {
    width: 350px;
    height: 130px;
  }

  &:hover {
    height: ${(props) => props?.height};
  }
`;

const Display = styled.div<DisplayProps>`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;

  @media (max-width: 425px) {
    flex-direction: ${(props) => (props?.width == 425 ? "row" : "column")};
  }
`;
const ListTitle = styled.span`
  font-family: "Poppins";
  font-style: normal;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 1px;
  color: #bdebea;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

const Badge = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 26px;
  color: #252728;
  background: linear-gradient(90deg, #00f5a0 0%, #00d9f5 100%);
  border-radius: 100px;
  padding: 1px 22px;
  text-align: center;

  @media (max-width: 768px) {
    font-weight: 500px;
    padding: 0px 18px;
  }

  @media (max-width: 425px) {
    width: fit-content;
    padding: 0px 12px;
  }
`;

const IconText = styled.span`
  font-family: "Poppins";
  font-style: normal;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;
  letter-spacing: 1px;
  color: #bdebea;
  display: flex;
  align-items: center;
`;

const Description = styled.ul`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #bdebea;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;

const LocationDisplay = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

function Listview({
  jobTitle,
  status,
  officeName,
  location,
  date,
  description,
  height,
  width,
}: ListviewProps) {
  return (
    <ListWrapper height={height}>
      <Display width={width}>
        <ListTitle>{jobTitle}</ListTitle>
        <Badge>{status}</Badge>
      </Display>
      <Display width={426}>
        <Display width={426}>
          <IconText>
            <Office style={{ marginRight: "4px" }} />
            {officeName}
          </IconText>
          <LocationDisplay style={{ marginLeft: "25px" }}>
            <IconText>
              <Location style={{ marginRight: "4px" }} />
              {location}
            </IconText>
          </LocationDisplay>
        </Display>
        <IconText>
          <Calender style={{ marginRight: "4px" }} />
          {date}
        </IconText>
      </Display>
      <Description>
        {description?.map(
          (
            res:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined
          ) => {
            return <li style={{ marginBottom: "15px" }}>{res}</li>;
          }
        )}
      </Description>
    </ListWrapper>
  );
}

export default Listview;
