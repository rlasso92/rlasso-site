<script setup lang="ts">
const socials = [
  {
    name: 'Whatsapp',
    url: 'https://wa.link/y18jd0',
    icon: 'ph:whatsapp-logo-bold',
  },
  {
    name: 'Email',
    url: 'mailto:ronylasso@gmail.com',
    icon: 'ph:envelope-open',
  },
  {
    name: 'Phone',
    url: 'tel:+50768723220',
    icon: 'ph:phone',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rlasso92/',
    icon: 'ph:linkedin-logo-bold',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/rlasso_92/',
    icon: 'ph:instagram-logo-duotone',
  },
]

const languages = [
  {
    name: 'English',
    mastery: 'Intermediate level',
    level: 60,
    icon: '/img/usa.svg',
  },
  {
    name: 'Spanish',
    mastery: 'Native Speaker, fluent',
    level: 100,
    icon: '/img/spain.svg',
  },
  {
    name: 'Portuguese',
    mastery: 'Beginner Level',
    level: 45,
    icon: '/img/brazil.svg',
  },
]

const tools = [
  {
    name: 'Azure',
    mastery: 'Advanced level',
    level: 90,
    logo: '/img/stacks/framework/azure.svg',
  },
  {
    name: 'Aws',
    mastery: 'Intermediate level',
    level: 90,
    logo: '/img/stacks/framework/aws.svg',
  },
  {
    name: 'Docker',
    mastery: 'Advanced level',
    level: 95,
    logo: '/img/stacks/framework/docker.svg',
  },
  {
    name: 'Terraform',
    mastery: 'Advanced level',
    level: 95,
    logo: '/img/stacks/framework/terraform.svg',
  },
  {
    name: 'Sonarcloud',
    mastery: 'Intermediate level',
    level: 90,
    logo: '/img/stacks/framework/sonarcloud.svg',
  },
  {
    name: 'Snyk',
    mastery: 'Advanced level',
    level: 90,
    logo: '/img/stacks/framework/snyk.svg',
  },
  {
    name: 'github',
    mastery: 'Advanced level',
    level: 90,
    logo: '/img/stacks/github.svg',
  },
]
const skills = [
  {
    name: 'Team Work',
    experience: 7,
    level: 90,
    icon: 'ph:archive-duotone',
  },
  {
    name: 'Product management',
    experience: 4,
    level: 95,
    icon: 'ph:archive-duotone',
  },
  {
    name: 'Leadership',
    experience: 10,
    level: 75,
    icon: 'ph:archive-duotone',
  },
  {
    name: 'Comunication',
    experience: 10,
    level: 95,
    icon: 'ph:archive-duotone',
  },
]

const portfolio = [
  {
    name: 'BBT Supplies',
    details:
      'Development and maintenance of CRM purchasing and inventory module of the BBT Supplies system deployed on glassfish server',
    team: '8',
    status: 'Completed',
    customer: {
      name: 'Multibank',
      logo: '/img/multibank.png',
      text: 'Jr. Java Developer',
    },
    stacks: [
      {
        name: 'Java',
        icon: '/img/stacks/java.svg',
      },
      {
        name: 'JSF',
        icon: '/img/stacks/jsf.png',
      },
      {
        name: 'SQL Server',
        icon: '/img/stacks/sqlserver.png',
      },
    ],
  },
  {
    name: 'Supply Chamber',
    details:
      'Dashboard for processing incoming and outgoing checks at the bank cash deskDevelopment and maintenance of CRM purchasing and inventory module of the BBT Supplies system deployed on glassfish server',
    team: '2',
    status: 'Completed',
    customer: {
      name: 'FPB Bank',
      logo: '/img/fpb.png',
      text: 'Jr. Java Developer',
    },
    stacks: [
      {
        name: 'Java',
        icon: '/img/stacks/java.svg',
      },
      {
        name: 'JSF',
        icon: '/img/stacks/jsf.png',
      },
      {
        name: 'SQL Server',
        icon: '/img/stacks/sqlserver.png',
      },
    ],
  },
  {
    name: 'PCI Express Bill Dashboard',
    details:
      'Development and implementation of a CRM for the management of card transactions and process validation (PCI) Security Standards Council in all CHUBB Latin America databases.',
    team: '4',
    status: 'Completed',
    customer: {
      name: 'Chubb Insurance',
      logo: '/img/chubb.jpeg',
      text: 'Sr. dotnet Developer',
    },
    stacks: [
      {
        name: 'Dotnet',
        icon: '/img/stacks/csharp.svg',
      },
      {
        name: 'Angular',
        icon: '/img/stacks/angular.svg',
      },
      {
        name: 'SQL Server',
        icon: '/img/stacks/sqlserver.png',
      },
    ],
  },
  {
    name: 'MIDA PNLOG',
    details:
      'Development of ERP Port Manifest System (PNLOG) Integration of SSO Keycloak with Portcel (Technological Portal for Foreign Trade and Logistics) Processing of ANA Panama manifests (National Customs Authority)',
    team: '6',
    status: 'Completed',
    customer: {
      name: '(MIDA) Ministry of agricultural development',
      logo: '/img/mida.png',
      text: 'Sr. java Developer',
    },
    stacks: [
      {
        name: 'Java',
        icon: '/img/stacks/java.svg',
      },
      {
        name: 'Spring MVC',
        icon: '/img/stacks/spring.png',
      },
      {
        name: 'SQL Server',
        icon: '/img/stacks/sqlserver.png',
      },
    ],
  },
  {
    name: 'Sport Fishing',
    details:
      'Development of a mobile application in ionic which uses geolocation in sport fishing to have an inventory of the species that are fished and is presented in an administrative dashboard',
    team: '6',
    status: 'Completed',
    customer: {
      name: 'Smithsonian Org.',
      logo: '/img/smithsonian.png',
      text: 'Sr. Developer',
    },
    stacks: [
      {
        name: 'Angular',
        icon: '/img/stacks/angular.svg',
      },
      {
        name: 'Node',
        icon: '/img/stacks/nodejs.svg',
      },
      {
        name: 'Dotnet',
        icon: '/img/stacks/csharp.svg',
      },
      {
        name: 'SQL Server',
        icon: '/img/stacks/sqlserver.png',
      },
    ],
  },
  {
    name: 'Vale Panama',
    details:
      'Development of a CRM for card activation and user management of the Vale Panama platform in mvc in dotnet and implementation of azure management API for mapping soap to rest of the web services to be used Improvements Web Service for querying card transactions Vale Panama.',
    team: '3',
    status: 'Completed',
    customer: {
      name: 'Capital Bank',
      logo: '/img/capital.png',
      text: 'Sr. .Net Developer',
    },
    stacks: [
      {
        name: 'Azure',
        icon: '/img/stacks/framework/azure.svg',
      },
      {
        name: 'Dotnet',
        icon: '/img/stacks/csharp.svg',
      },
      {
        name: 'SQL Server',
        icon: '/img/stacks/sqlserver.png',
      },
    ],
  },
  {
    name: 'Report Automation',
    details:
      'Data extraction from Ultimus BPM for the automation of reports, generation of loan settlement statistics, control procedures and C.S.S certificates through Reporting Services. Data extraction from Ultimus BPM for the automation of reports, generation of settlement statistics of loans, control procedures and C.S.S certificates through Reporting Services.',
    team: '1',
    status: 'Completed',
    customer: {
      name: 'Caja de Ahorros',
      logo: '/img/ca.png',
      text: 'Sr. .Net Developer',
    },
    stacks: [
      {
        name: 'Dotnet',
        icon: '/img/stacks/csharp.svg',
      },
      {
        name: 'SQL Server',
        icon: '/img/stacks/sqlserver.png',
      },
    ],
  },
  {
    name: 'Tu Crecimiento',
    details:
      'CRM for bank loan application implemented in Dotnet MVC and Bootstrap',
    team: '1',
    status: 'Completed',
    customer: {
      name: 'People in motion',
      logo: '/img/pim.png',
      text: 'Sr. .Net Developer',
    },
    stacks: [
      {
        name: 'Dotnet',
        icon: '/img/stacks/csharp.svg',
      },
      {
        name: 'Bootstrap',
        icon: '/img/stacks/framework_css/bootstrap.svg',
      },

      {
        name: 'SQL Server',
        icon: '/img/stacks/sqlserver.png',
      },
    ],
  },
  {
    name: 'RH CRM',
    details:
      'CRM for employee management, vacation requests, permits, etc. implemented in dotnet mvc bootstrap',
    team: '1',
    status: 'Completed',
    customer: {
      name: 'People in motion',
      logo: '/img/pim.png',
      text: 'Sr. .Net Developer',
    },
    stacks: [
      {
        name: 'Dotnet',
        icon: '/img/stacks/csharp.svg',
      },
      {
        name: 'Bootstrap',
        icon: '/img/stacks/framework_css/bootstrap.svg',
      },

      {
        name: 'SQL Server',
        icon: '/img/stacks/sqlserver.png',
      },
    ],
  },
  {
    name: 'Assa AutoPx',
    details:
      'Development of microservices for the purchase of car insurance implemented in dotnet and deployed in AKS kubernetes cluster managing transaction queues with azure services bus, azure storage as well as integration with the payment gateway',
    team: '10',
    status: 'Completed',
    customer: {
      name: 'Assa Compañia de Seguros',
      logo: '/img/assa.png',
      text: 'Sr. .Net Developer',
    },
    stacks: [
      {
        name: 'Azure',
        icon: '/img/stacks/framework/azure.svg',
      },
      {
        name: 'Dotnet',
        icon: '/img/stacks/csharp.svg',
      },

      {
        name: 'React',
        icon: '/img/stacks/reactjs.svg',
      },
      {
        name: 'K8s',
        icon: '/img/stacks/framework/k8s.svg',
      },

      {
        name: 'Postgres',
        icon: '/img/stacks/postgresql.png',
      },
    ],
  },
  {
    name: 'Assa Reclamos Auto',
    details:
      'Development and implementation of the integration and deployment pipelines of the mobile auto claims application which processes evidence and accident reports. The azure devops yml is implemented using snyk sonarcloud for code analysis and testing as well as the packaging of the apps and its due publication in the stores',
    team: '1',
    status: 'Completed',
    customer: {
      name: 'Assa Compañia de Seguros',
      logo: '/img/assa.png',
      text: 'Dev Ops Engineer',
    },
    stacks: [
      {
        name: 'Azure',
        icon: '/img/stacks/framework/azure.svg',
      },
      {
        name: 'Dotnet',
        icon: '/img/stacks/csharp.svg',
      },
      {
        name: 'Android',
        icon: '/img/stacks/android.svg',
      },
      {
        name: 'React',
        icon: '/img/stacks/reactjs.svg',
      },
    ],
  },
  {
    name: 'Unibank Token',
    details:
      'Maintenance to CRM for managing security tokens of the banks online banking, changing from soap to rest web services',
    team: '2',
    status: 'Completed',
    customer: {
      name: 'Unibank',
      logo: '/img/unibank.png',
      text: 'Sr. .Net Developer',
    },
    stacks: [
      {
        name: 'Dotnet',
        icon: '/img/stacks/csharp.svg',
      },
    ],
  },
  {
    name: 'OIRSA CRM',
    details:
      'Implementation of CRM in dotnet MVC for management of chemical and biological samples in Oirsa laboratories',
    team: '2',
    status: 'Completed',
    customer: {
      name: '(MIDA) Ministry of agricultural development',
      logo: '/img/mida.png',
      text: 'Sr. .Net Developer',
    },
    stacks: [
      {
        name: 'Dotnet',
        icon: '/img/stacks/csharp.svg',
      },
      {
        name: 'Bootstrap',
        icon: '/img/stacks/framework_css/bootstrap.svg',
      },

      {
        name: 'SQL Server',
        icon: '/img/stacks/sqlserver.png',
      },
    ],
  },
  {
    name: 'Fund Your Trades',
    details:
      'CRM for brokers metaquotes account management, affiliation system and payment gateway implemented in python flask and Vu3',
    team: '2',
    status: 'On Going',
    customer: {
      name: 'Fund Your Trades',
      logo: '/img/fyt.svg',
      text: 'Sr. Developer',
    },
    stacks: [
      {
        name: 'Python',
        icon: '/img/stacks/python.svg',
      },
      {
        name: 'Vue',
        icon: '/img/stacks//vuejs.svg',
      },

      {
        name: 'Postgresql',
        icon: '/img/stacks/postgresql.png',
      },
    ],
  },
  {
    name: 'Foodly',
    details:
      'Implementation of a SaaS ERP for inventory management, billing, suppliers and payment gateways for restaurants and food trucks',
    team: '2',
    status: 'On Going',
    customer: {
      name: 'BashPty',
      logo: '/img/bashpty.png',
      text: 'Sr. Developer',
    },
    stacks: [
      {
        name: 'Python',
        icon: '/img/stacks/python.svg',
      },
      {
        name: 'Vue',
        icon: '/img/stacks//vuejs.svg',
      },

      {
        name: 'Postgresql',
        icon: '/img/stacks/postgresql.png',
      },
    ],
  },
]
</script>
<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="flex w-full flex-col">
        <BaseAvatar src="/img/profile.png" badge-src="/img/panama.svg" size="2xl" class="mx-auto" />
        <div class="mx-auto w-full max-w-md text-center">
          <BaseHeading tag="h2" size="xl" weight="medium" class="mt-4">
            Ronoaldo Lasso
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-400 mb-3 mt-1 text-justify">
            Hello, welcome to my portfolio, here you will find some projects in
            which I have participated and the technological stacks that I have
            worked on.
          </BaseParagraph>
          <div class="divide-muted-200 dark:divide-muted-800 flex items-center justify-center divide-x">
            <div class="text-muted-400 flex h-8 items-center gap-1 px-4">
              <Icon name="ph:circles-three-duotone" class="h-5 w-5" />
              <BaseText size="sm">500+ relations</BaseText>
            </div>
            <div class="text-muted-400 hidden h-8 items-center gap-1 px-4 sm:flex">
              <Icon name="ph:check-circle-duotone" class="h-5 w-5" />
              <BaseText size="sm">50+ projects</BaseText>
            </div>
            <div class="flex h-8 items-center gap-2 px-4">
              <NuxtLink v-for="link in socials" :key="link.name" :to="link.url" target="_blank"
                rel="noopener noreferrer"
                class="border-muted-200 hover:border-primary-500 dark:border-muted-700 dark:hover:border-primary-500 dark:bg-muted-800 text-muted-400 hover:text-primary-500 flex h-8 w-8 items-center justify-center rounded-full border bg-white transition-colors duration-300">
                <Icon :name="link.icon" class="h-3 w-3" />
                <span class="sr-only">{{ link.name }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-12">
          <div class="flex flex-col gap-6">
            <BaseCard class="p-8">
              <!-- Bio -->
              <div class="border-muted-200 dark:border-muted-700 border-b pb-8">
                <div class="mb-4 flex items-center gap-2">
                  <h4 class="text-muted-400 font-sans text-xs font-semibold uppercase">
                    About me
                  </h4>
                </div>
                <div class="relative">
                  <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400 text-justify">
                    I am a DevOps and Developer with more than 10 years of
                    experience developing web and mobile applications. I have a
                    deep knowledge of Java, Dotnet, open source technologies,
                    robotics, electronics and the cloud (AWS, Azure, GCP). I am
                    passionate about technology and I love facing new challenges
                    in each project.
                  </BaseParagraph>
                  <br />
                  <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400 text-justify">
                    In my professional experience I have led and participated in
                    various projects, such as the development of a web
                    application for an e-commerce company, the implementation of
                    an inventory management system for a retail company and in
                    the area of ​​banking, insurance as well as shipping
                    companies and government institutions. In all these projects
                    I have demonstrated my ability to analyze and solve
                    problems, work as a team and deliver high quality results.
                  </BaseParagraph>
                  <br />
                  <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400 text-justify">
                    My professional goal is to work in innovative companies
                    where I can continue developing my skills and contribute to
                    the success of the team.
                  </BaseParagraph>
                </div>
              </div>

              <div class="border-muted-200 dark:border-muted-700 border-b py-8">
                <div class="mb-8 flex items-center gap-2">
                  <h4 class="text-muted-400 font-sans text-xs font-semibold uppercase">
                    Portfolio
                  </h4>
                </div>
                <div class="ltablet:grid-cols-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <TransitionGroup enter-active-class="transform-gpu" enter-from-class="opacity-0 -translate-x-full"
                    enter-to-class="opacity-100 translate-x-0" leave-active-class="absolute transform-gpu"
                    leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 -translate-x-full">
                    <BaseCard v-for="(item, index) in portfolio" :key="index" shape="rounded" elevated-hover
                      class="hover:!border-primary-500">
                      <NuxtLink class="group" to="#">
                        <div class="p-5">
                          <div class="relative mb-4">
                            <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400 text-justify">
                              {{ item.details }}
                            </BaseParagraph>
                          </div>
                          <div class="mb-6 flex gap-2">
                            <BaseAvatar :src="item.customer.logo" size="sm" :data-nui-tooltip="item.name"
                              class="bg-muted-100 dark:bg-muted-700" />
                            <div>
                              <BaseHeading tag="h5" size="sm" weight="medium" class="line-clamp-1">
                                {{ item.name }}
                              </BaseHeading>
                              <BaseParagraph size="xs" class="text-muted-400">
                                {{ item.customer.name }} |
                                {{ item.customer.text }}
                              </BaseParagraph>
                            </div>
                          </div>
                          <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                              <BaseAvatar v-for="stack in item.stacks" :key="stack.name" :src="stack.icon" size="xxs"
                                :data-nui-tooltip="stack.name" class="bg-muted-100 dark:bg-muted-700" />
                            </div>
                            <div class="text-muted-400 flex items-center gap-4">
                              <div class="flex items-center gap-1 text-sm">
                                <Icon name="ph:users-duotone" class="h-4 w-4" />
                                <span class="font-sans">
                                  {{ item.team }}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="border-muted-200 dark:border-muted-700 bg-muted-50 dark:bg-muted-700/50 flex items-center justify-between rounded-b-lg border-t px-5 py-3">
                          <div>
                            <p class="text-muted-400 font-sans text-sm">
                              {{ item.status }}
                            </p>
                          </div>
                        </div>
                      </NuxtLink>
                    </BaseCard>
                  </TransitionGroup>
                </div>
              </div>

              <!-- Languages -->
              <div class="border-muted-200 dark:border-muted-700 border-b py-8">
                <div class="mb-8 flex items-center gap-2">
                  <h4 class="text-muted-400 font-sans text-xs font-semibold uppercase">
                    Languages
                  </h4>
                </div>
                <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div v-for="item in languages" :key="item.name" class="flex w-full items-center gap-2">
                    <div
                      class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border bg-white">
                      <img :src="item.icon" :alt="item.name" class="h-8 w-8 rounded-full" />
                      <BaseProgressCircle :size="68" :thickness="1.5" :value="item.level"
                        class="text-primary-500 absolute -start-2.5 -top-2.5" />
                    </div>
                    <div>
                      <BaseHeading tag="h3" size="sm" weight="medium">
                        {{ item.name }}
                      </BaseHeading>
                      <BaseParagraph size="xs" class="text-muted-400">
                        <span>{{ item.mastery }}</span>
                      </BaseParagraph>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6 grid grid-cols-12 gap-6">
                <div class="col-span-12 sm:col-span-6">
                  <div class="mb-8 flex items-center gap-2">
                    <h4 class="text-muted-400 font-sans text-xs font-semibold uppercase">
                      Skills
                    </h4>
                  </div>
                  <div class="space-y-8">
                    <div v-for="item in skills" :key="item.name" class="flex w-full items-center gap-2">
                      <div
                        class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border bg-white">
                        <img v-if="'logo' in item" :src="item.logo" :alt="item.name" class="h-8 w-8 rounded-full" />
                        <Icon v-else :name="item.icon" class="text-muted-400 h-6 w-6" />
                        <BaseProgressCircle :size="68" :thickness="1.5" :value="item.level"
                          class="text-primary-500 absolute -start-2.5 -top-2.5" />
                      </div>
                      <div>
                        <BaseHeading tag="h3" size="sm" weight="medium">
                          {{ item.name }}
                        </BaseHeading>
                        <BaseParagraph size="xs" class="text-muted-400">
                          <span>{{ item.experience }} years of experience</span>
                        </BaseParagraph>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-span-12 sm:col-span-6">
                  <div class="flex flex-col gap-6">
                    <div class="mb-8 flex items-center gap-2">
                      <h4 class="text-muted-400 font-sans text-xs font-semibold uppercase">
                        Tools
                      </h4>
                    </div>
                    <div class="space-y-6">
                      <div v-for="item in tools" :key="item.name" class="flex w-full items-center gap-2">
                        <div
                          class="border-muted-200 dark:border-muted-600 dark:bg-muted-700 relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border bg-white">
                          <img :src="item.logo" :alt="item.name" class="h-8 w-8 rounded-full" />
                          <BaseProgressCircle :size="68" :thickness="1.5" :value="item.level"
                            class="text-primary-500 absolute -start-2.5 -top-2.5" />
                        </div>
                        <div>
                          <BaseHeading tag="h3" size="sm" weight="medium">
                            {{ item.name }}
                          </BaseHeading>
                          <BaseParagraph size="xs" class="text-muted-400">
                            <span>{{ item.mastery }}</span>
                          </BaseParagraph>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
