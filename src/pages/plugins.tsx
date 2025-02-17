import React, {  useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HeaderSlogan from '../components/HeaderSlogan';

import pluginList from '../../static/data/plugin.json';


export default function Plugins(): JSX.Element {
  const { i18n } = useDocusaurusContext();
  const currentLang = i18n.currentLocale;
  const lang = currentLang === 'en' ? 'en_US' : 'zh_CN';
  const list = pluginList[lang];


  return (
    <Layout
      title={translate({ message: 'Plugins' })}
      description="Extend capabilities and unlock new possibilities with our community-made plugins.">
      <HeaderSlogan type="plugin" />
      <Container className='py-5'>
         <div style={{ fontSize: '1.25rem' }}>
            <a href="/docs/plugins">
              <Translate id="plugins.instruction.install">Install plugins</Translate>
            </a>
            {' · '}
            <a href="/docs/development/plugins#create-a-plugin">
              <Translate id="plugins.instruction.create">Create a plugin</Translate>
            </a>
            {' · '}
            <a href="https://github.com/apache/answer-plugins" target='_blank'>
              <Translate id="plugins.instruction.submit">Submit a plugin</Translate>
            </a>
          </div>

         <Row className='mt-5'>
            {list?.map((item) => {
              return <Col sm={12} md={6} lg={3} className='mb-4' key={item.name}>
                <Card style={{ height: '100%' }}>
                  <Card.Body>
                    <h5>
                      <a href={item.link} target='_blank'>{item.name}</a>
                    </h5>
                    <div className='text-truncate-4'>{item.desc}</div>
                  </Card.Body>
                </Card>
              </Col>
            })}
         </Row>
      </Container>
    </Layout>
  )
}
