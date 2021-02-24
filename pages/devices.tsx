import { GetStaticProps, NextPage } from "next";
import { RichTextBlock } from "prismic-reactjs";
import Prismic from "prismic-javascript";
import Head from "next/head";
import Image from "next/image";
import PageContext from "../state/PageContext";
import Layout from "../components/Layout";
import usePageData from "../hooks/usePageData";
import AddToCart from "../components/AddToCart";

export const getStaticProps: GetStaticProps = async () => {
  const restQuery = Prismic.getApi("https://webex.cdn.prismic.io/api/v2").then(
    async (api) => {
      const doc = await api.query(
        Prismic.Predicates.at("document.type", "device")
      );

      return doc;
    }
  );

  const { results } = await restQuery;

  const devices = results.map((result) => result.data);

  return {
    props: {
      devices,
    },
  };
};

interface IDevice {
  title: string;
  description: string;
  sku: string;
  price: number;
  image: RichTextBlock;
}

type Devices = IDevice[];

interface IDevicesProps {
  devices: Devices;
}

interface IDeviceProps {
  device: IDevice;
}

const DeviceTile: Component<IDeviceProps> = ({ device }) => {
  const { image, description, price, title, sku } = device;
  return (
    <div className="flex flex-col justify-center">
      <Image
        src={image.url}
        width={image.dimensions.width}
        height={image.dimensions.height}
      />
      <h3>{title}</h3>
      <span className="text-sm text-webex-gray">{description}</span>
      <div>${price}</div>
      <AddToCart
        sku={sku}
        title={title}
        imageUrl={image.url}
        description={description}
        url="#"
        price={price}
      />
    </div>
  );
};

const Body = () => {
  const { devices } = usePageData<IDevicesProps>();

  return (
    <div className="container flex flex-col justify-center w-full py-12">
      <h1 className="pb-12 text-center">Cisco Webex Devices</h1>
      <div className="grid grid-cols-3 gap-11">
        {devices.map((device) => (
          <DeviceTile key={device.sku} device={device} />
        ))}
      </div>
    </div>
  );
};

const Devices: NextPage<IDevicesProps> = ({ devices }) => {
  return (
    <PageContext.Provider value={{ devices }}>
      <Head>
        <meta name="description" content="Check out Cisco Webex Devices" />
        <meta name="title" content="Cisco Webex Devices" />
        <title>Cisco Webex Devices</title>
      </Head>
      <Layout>
        <Body />
      </Layout>
    </PageContext.Provider>
  );
};

export default Devices;
