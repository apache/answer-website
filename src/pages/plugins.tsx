import React, {  useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Translate, { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';

import HeaderSlogan from '../components/HeaderSlogan';


export default function Plugins(): JSX.Element {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/apache/incubator-answer-plugins/main/plugins_desc.json').then(res => res.json()).then(data => {
      setList(data);
    }).catch(err => {
      console.error('featch plugins list error', err);
    })
  }, [])
  return (
    <Layout
      title={translate({ message: 'Plugins' })}
      description="Extend capabilities and unlock new possibilities with our community-made plugins.">
      <HeaderSlogan type="plugin" />
      <Container className='py-5'>
         <div style={{ fontSize: '1.25rem' }}>
          <Translate
            id="plugins.instruction"
            values={{
              install_plugin_link: (
                <a href="/docs/plugins">
                  <Translate id="plugins.instruction.install">Install plugins</Translate>
                </a>
              ),
              create_link: (
                <a href="/community/plugins">
                  <Translate id="plugins.instruction.create">Create a plugin</Translate>
                </a>
              ),
              submit_link: (
                <a href="https://github.com/apache/incubator-answer-plugins" target='_blank'>
                  <Translate id="plugins.instruction.submit">Submit a plugin</Translate>
                </a>
              )
            }}
            >
            {`{install_plugin_link} · {create_link} · {submit_link}`}
          </Translate>
          </div>

         <Row className='mt-5'>
            {list?.map((item) => {
              return <Col sm={12} md={6} lg={3} className='mb-4' key={item.name}>
                <Card style={{ height: '100%' }}>
                  <Card.Body>
                    <h5>
                      <a href={item.link} target='_blank'>{item.name}</a>
                    </h5>
                    <div>{item.desc}</div>
                  </Card.Body>
                </Card>
              </Col>
            })}

         </Row>
      </Container>
    </Layout>
  )
}
