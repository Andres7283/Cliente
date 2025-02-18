export interface aleatorio {
  results: [
    {
      name: {
        title: string;
        first: string;
        last: string;
      };
      location: {
        city: string;
      };

      email: string;

      picture: {
        medium: string;
      };
    }
  ];
}
