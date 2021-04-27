import * as React from 'react';

import { Box } from '@twilio-paste/box';
import { Card } from '@twilio-paste/card';
import { Heading } from '@twilio-paste/heading';
import { Stack } from '@twilio-paste/stack';
import { Text } from '@twilio-paste/text';
import { Button } from '@twilio-paste/button';
import { Label } from '@twilio-paste/label';
import { Input } from '@twilio-paste/input';
import { Flex } from '@twilio-paste/flex';

import { useSelector } from 'react-redux';


const DogFactForm = ({ onSubmit }) => {
  const [value, setValue] = React.useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
  };

  return (
    <Box marginBottom="space80">
    <form onSubmit={handleSubmit}>
      <Flex>
        <Box width="100%">
          <Label htmlFor="number-of-facts">Number of Dog Facts</Label>
          <Input
            type="number"
            value={value}
            min="1"
            max="10"
            onChange={(event) => setValue(+event.target.value)}
            id="number-of-facts"
          />
        </Box>
      </Flex>
      <Box marginY="space40">
        <Button onClick={handleSubmit} fullWidth>
          Fetch
        </Button>
      </Box>
    </form>
    </Box>
  );
};

const Fact = ({ fact }) => {
  return (
    <Card className="dog-fact">
      <Heading variant="heading30" as="h3">
        Dog Fact
      </Heading>
      <Text>{fact}</Text>
    </Card>
  );
};

const Application = () => {
  const facts = useSelector((state) => state.facts);

  const handleSubmit = (n) => {
    console.log('Implement me!');
  };

  return (
    <Box>
      <DogFactForm onSubmit={handleSubmit} />
      <Stack orientation="vertical" spacing="space60">
        {facts.map((fact, index) => (
          <Fact key={index} fact={fact.fact} />
        ))}
      </Stack>
    </Box>
  );
};

export default Application;
