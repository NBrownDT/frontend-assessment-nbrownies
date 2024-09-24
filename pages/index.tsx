import type { NextPage } from "next";

import DefaultLayout from "@components/layouts/Default";
import TextBanner from "@components/ui/TextBanner";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <TextBanner title="Welcome to the N Brownies technical&nbsp;assessment!">
        <p>This mini web-app has been created to provide a real-world-ish
            playground to demonstrate your technical abilities.</p>
        <p>The interview panel will guide you through setting up the project, and provide you with a few tasks to demonstrate your ability.</p>
        <p>This is intended to be an enjoyable experience, and we acknowledge the pressure involved in a technical assesment, so please don&apos;t hesitate to ask for support throughout your assesment.</p>
      </TextBanner>
    </DefaultLayout>
  );
};

export default Home;
